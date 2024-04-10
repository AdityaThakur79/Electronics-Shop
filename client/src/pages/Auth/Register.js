import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Register.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/register`,
        { name, email, password, phone, address }
      );

      if (res && res.data.success) {
        toast.success(res.data.message, {
          duration: 4000,
          position: "top-center",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  return (
    <Layouts title={"Register - Electronic Shop"}>
      <div className="mainclass">
        <div className="wrapper">
          <h2>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Create password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your Phone"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your address"
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="input-box button">
              <input type="Submit" defaultValue="Register Now" />
            </div>
            <div className="text">
              <h3>
                Already have an account? <Link to="/login">Login now</Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </Layouts>
  );
};

export default Register;
