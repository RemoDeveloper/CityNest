// src/components/Footer/Footer.jsx

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container paddings innerWidth flexCenter">
        {/* Left Side */}
        <div className="footer-left flexColStart">
          <img src="/public/logo-cityNest-01.png" alt="CityNest Logo" />
          <p className="footer-text">
            Our vision is to make all people <br />
            the best place to live for them.
          </p>
        </div>

        {/* Right Side */}
        <div className="footer-right flexColStart">
          <h4 className="footer-heading">Information</h4>
          <p className="footer-text">Happy Colony, Karve Nagar - 411052</p>
          <div className="footer-menu">
            <a href="#">Property</a>
            <a href="#">Services</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CityNest | Real Estate Solutions</p>
        
      </div>
    </footer>
  );
};

export default Footer;
