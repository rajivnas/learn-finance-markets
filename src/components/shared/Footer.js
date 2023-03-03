import React from "react";

const Footer = () => {
  return (
    <footer className="footer py-2">
      <div className="container">
        <div className="footer_bottom">
          <p>Copyright ©{new Date().getFullYear()} rights reserved</p>
          <p className="footer_credit">
            Created by <a href="https://www.kishore.dev/">kishore.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
