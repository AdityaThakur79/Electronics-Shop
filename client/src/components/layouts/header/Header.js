import React from "react";
import "./Header.css";
import Search from "./Search";
import MainNavbar from "./Navbar.js";

const Header = () => {
  return (
    <>
      <Search />
      <MainNavbar />
    </>
  );
};

export default Header;
