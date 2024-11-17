import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserComponent = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>User Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
           Orders
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserComponent;
