import React from "react";
import Helmet from "react-helmet";

const Layouts = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <main>{children}</main>
    </div>
  );
};

// Layouts.defaultProps = {
//   title: "Electronic Shop",
//   description: "Mern Stack Project",
//   keywords: "mern,node,express,react,mongodb",
//   author: "Aditya Thakur",
// };

export default Layouts;
