import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav_wrapper">
        <h1>Navbar</h1>
        <ul className="nav_menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
