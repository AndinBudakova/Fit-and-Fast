import React from "react";
import "./Footer.css";
import GitHub from "../../assets/images/github.png";
import Instagram from "../../assets/images/instagram.png";
import LinkedIn from "../../assets/images/linkedin.png";
import Logo from "../../assets/images/logo.png";
import Canvas from "../Canvas/TableCanvas.jsx"

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={GitHub} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          {/* <img src={Logo} alt="" /> */}
          <Canvas />
        </div>
      </div>
    </div>
  );
};

export default Footer;
