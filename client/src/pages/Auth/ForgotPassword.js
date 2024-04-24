import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Register.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/forgot-password`,
        { email, newpassword, answer }
      );

      if (res && res.data.success) {
        toast.success(res.data.message);

        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layouts title={"Forgot Password - Electronic Shop"}>
      <div className="mainclass">
        <div className="wrapper">
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
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
                type="text"
                placeholder="Enter your Favourite Food"
                required
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Change password"
                required
                value={newpassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>

            <div className="input-box button">
              <input type="Submit" defaultValue="Change Password" />
            </div>
          </form>
        </div>
      </div>
    </Layouts>
  );
};

export default ForgotPassword;
