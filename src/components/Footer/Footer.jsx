import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="l-container">
        <ul>
          <li className="footer-item">
            <a href="/">Home</a>
          </li>
          <li className="footer-item">
            <a href="/">About</a>
          </li>
          <li className="footer-item">
            <a href="/">Activities</a>
          </li>
          <li className="footer-item">
            <a href="/">Team</a>
          </li>
        </ul>
        {/* <div className="line"></div> */}
      </div>
      <div className="r-container">
        <p>Copyright © 2021 All Rights Reserved by SAIC.</p>
      </div>
    </div>
  );
};

export default Footer;
