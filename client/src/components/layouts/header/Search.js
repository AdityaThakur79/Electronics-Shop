import React from "react";
import { Link, NavLink } from "react-router-dom";
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
              <h4>Gadget Galaxy</h4>
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
                <div
                  className="dropdown"
                  style={{ position: "relative", zIndex: 9999 }}
                >
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="/images/pp.jpeg"
                      alt="Profile"
                      className="profile-img"
                    />

                    {auth?.user.role == 1 ? "Admin" : "User"}
                  </button>
                  <ul className="dropdown-menu" style={{ zIndex: 9999 }}>
                    <li>
                      <NavLink
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        style={{ margin: "10px" }}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        style={{ margin: "10px" }}
                        onClick={handleLogout}
                      >
                        Logout{" "}
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </Link>
                    </li>
                  </ul>
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
