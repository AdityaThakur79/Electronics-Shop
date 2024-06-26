import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignin = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error in Signin",
      error,
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res
        .status(401)
        .send({ success: false, message: "Unauthorized Access" });
    } else {
      next();
    }
  } catch (error) {
    return res.status(404).send({
      success: false,
      message: "Error in Signin",
      error,
    });
  }
};
