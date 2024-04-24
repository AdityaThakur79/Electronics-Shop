import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import toast from "react-hot-toast";

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/">
              <h2>Gadget Galaxy</h2>
            </Link>
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            {!auth.user ? (
              <>
                <Link to="/register" style={{ margin: "10px" }}>
                  Register
                </Link>
                <Link to="/login" style={{ margin: "10px" }}>
                  Login
                </Link>
              </>
            ) : (
              <>
                <div class="dropdown">
                  <button class="dropbtn" />
                  <img src="/images/pp.jpg" alt="Profile" class="profile-img" />
                  <div class="dropdown-content">
                    <Link to="/" style={{ margin: "10px" }}>
                      Dashboard
                    </Link>
                    <Link
                      to="/login"
                      style={{ margin: "10px" }}
                      onClick={handleLogout}
                    >
                      Logout <i className="fa-solid fa-right-from-bracket"></i>
                    </Link>
                  </div>
                </div>
              </>
            )}
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
