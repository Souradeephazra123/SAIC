import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="About">
      {/* <div className="l-about">
        <img src={Computer} alt="" />
      </div> */}
      <div className="about-content">
        <p>
          {" "}
          <span>ABOUT</span> US
        </p>
        {/* <div className="hr-line"></div> */}
        <p>
          S.A.I.C. was created under the Programming Club, IIT Mandi to fullfil
          the need of a dedicated club for cybersecurity and other information
          security related events and activities. S.A.I.C. is also responsible
          for maintaining the public facing SNTC server that allows other clubs
          and students to host their websites online.
        </p>
      </div>
    </div>
  );
};

export default About;
