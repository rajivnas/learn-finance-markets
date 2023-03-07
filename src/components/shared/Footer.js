import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer py-2">
      <div className="container">
        <ul className="footer_top mb-3">
          <li>
            <Link to="/contact">Support</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>

        <div className="footer_bottom">
          <p>Copyright ©{new Date().getFullYear()} rights reserved</p>
          <p className="footer_credit">
            Created by{" "}
            <a href="https://www.kishore.dev/" target="_blank" rel="noreferrer">
              kishore.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
