import userModel from "../models/userModel.js";
import { hashPassword, comparePassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";

//REGISTER
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    //validations
    if (!name) return res.send({ error: "Name is required" });
    if (!email) return res.send({ error: "Email is required" });
    if (!password) return res.send({ error: "Password is required" });
    if (!phone) return res.send({ error: "Phone is required" });
    if (!address) return res.send({ error: "Address is required" });

    //existing Users
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: true, message: "Already Registered Please Login" });
    }

    //Register User
    const hashedPassword = await hashPassword(password);

    //Save User
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(200).send({
      success: true,
      message: "User Registered Succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

//LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //VALIDATION
    if (!email || !password) {
      return res.status({
        success: false,
        message: "Invalid email or Password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "email is not registered" });
    }

    const matchedPassword = await comparePassword(password, user.password);
    if (!matchedPassword) {
      return res
        .status(200)
        .send({ success: false, message: "Invalid Credentials" });
    }

    //JWT TOKEN
    const token = await JWT.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    });
  }
};
