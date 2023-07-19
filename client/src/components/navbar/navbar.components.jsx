import "./navbar.styles.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/home">
        <button className="button-nav">Home</button>
      </Link>

      <NavLink to="/create">
        <button className="button-nav">Create</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
