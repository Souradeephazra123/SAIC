import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import SAICLOGO from "../../assets/logo-saic_2.svg-removebg-preview.png";
import { FaChevronCircleDown } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="content">
        <img src={SAICLOGO} alt="" />
        {/* <p>S.A.I.C.</p> */}
        <p>System Administration and Infosec Club</p>

        <Link to="About" smooth={true}>
          <div className="icon">
            <FaChevronCircleDown />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
