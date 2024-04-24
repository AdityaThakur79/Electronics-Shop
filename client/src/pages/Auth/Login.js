import React, { useState } from "react";
import Layouts from "../../components/layouts/Layouts";
import "./Register.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const location = useLocation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/login`,
        { email, password }
      );

      if (res && res.data.success) {
        toast.success(res.data.message);

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Layouts title={"Login - Electronic Shop"}>
      <div className="mainclass">
        <div className="wrapper">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="email"
                placeholder="Enter Email"
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
                placeholder="password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="input-box button">
              <input type="Submit" defaultValue="Login" />
            </div>

            <div className="text">
              <h3>
                Don't have an account?<Link to="/login">Register now</Link>
              </h3>
            </div>
            <div className="text">
              <h3>
                <Link to="/forgot-password">Forgot Password</Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
    </Layouts>
  );
};

export default Login;
