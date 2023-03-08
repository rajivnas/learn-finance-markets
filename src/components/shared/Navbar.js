import { Link } from "gatsby";
import React, { useState } from "react";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [animate, setAnimate] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav_wrapper">
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" width={80} height={30} alt="Logo" />
            </Link>
          </div>

          <div className={animate ? "change" : ""}>
            <button
              className="hamburger"
              title="hamburger"
              onClick={() => [setShow(!show), setAnimate(!animate)]}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </button>
          </div>

          <ul className="nav_menu">
            {navLinks.map((item, i) => {
              return (
                <li key={i} className="nav_item">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <div className={show ? "sidenav" : "deactived"}>
        <div className="side_menu">
          {navLinks.map((item, i) => {
            return (
              <li key={i}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
