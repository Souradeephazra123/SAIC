import React from "react";
import "./Activities.css";
import Bug from "../../assets/WhatsApp Image 2023-11-09 at 2.40.05 AM.jpeg";
import Cyber from "../../assets/lock.jpg";
import SA from "../../assets/server.jpg";
import CTF from "../../assets/CTF.jpeg";


const Activities = () => {
  return (
    <div className="activities" id="activities">
      <p>ACTIVITIES</p>
      <p>SAIC is responsible for sponsoring and organizing these events.</p>
      {/* <div className="hr-line2"></div> */}
      <div className="activity-row">
        <div className="activity-card">
          <img src={Cyber} alt="" />
          <div className="card-content">Cyber Security</div>
        </div>
        <div className="activity-card">
          <img src={Bug} alt="" />
          <div className="card-content">Bug</div>.
        </div>
        <div className="activity-card">
          <img src={SA} alt="" />
          <div className="card-content">Server</div>
        </div>
        <div className="activity-card">
          <img src={CTF} alt="" />
          <div className="card-content">CTF</div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
