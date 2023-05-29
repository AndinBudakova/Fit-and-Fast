import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="FF" className="logo" />

      <ul className="header-menu">
        <li>
          <Link to="home" spy={true} smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" spy={true} smooth={true} duration={1000}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="Reasons" spy={true} smooth={true} duration={1500}>
            Why Us
          </Link>
        </li>
        <li>
          <Link to="plans-container" spy={true} smooth={true} duration={2000}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="Testimonials" spy={true} smooth={true} duration={2000}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="video-slider-container" spy={true} smooth={true} duration={2000}>
            Workouts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
