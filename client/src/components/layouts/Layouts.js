import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layouts = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
