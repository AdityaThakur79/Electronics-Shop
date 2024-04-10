import React from "react";
import { Link } from "react-router-dom";
import Layouts from "../components/layouts/Layouts";

const Pagenotfound = () => {
  return (
    <>
      <Layouts title={"No Page Found - Electronics Shop"}>
        <div className="container top" style={{ height: "40vh" }}>
          <h1
            className="pnf-title"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            404
          </h1>
          <h2
            className="pnf-heading"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            Oops ! Page Not Found
          </h2>
          <Link
            to="/"
            style={{
              fontSize: "24px",
              border: "2px solid black",
              padding: "6px 10px",
              display: "block",
              margin: "20px auto",
              textAlign: "center",
              maxWidth: "200px",
            }}
          >
            Go Back
          </Link>
        </div>
      </Layouts>
    </>
  );
};

export default Pagenotfound;
