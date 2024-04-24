import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

//Creating Context
const AuthContext = createContext();

//Declaring function having destructed children as a prop
const AuthProvider = ({ children }) => {
  //useState hook with user and token
  const [auth, setAuth] = useState({ user: null, token: "" });

  //default axios authorization
   axios.defaults.headers.common["Authorization"] = auth?.token

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({ ...auth, user: parseData.user, token: parseData.token });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

//custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
