import React, { useState, useEffect } from "react";
import { useAuth } from "../context/auth.js";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner.js";


const Private = () => {
  const [ok, SetOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/auth/user-auth`);

      if (res.data.ok) {
        SetOk(true);
      } else {
        SetOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner />;
};

export default Private;
