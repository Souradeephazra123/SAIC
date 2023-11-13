import React from "react";
import "./Team.css";
import Horror from "../../assets/06.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Team = () => {
  return (
    <div className="team" id="team">
      <p>TEAM</p>
      <p>CONTRIBUTOR</p>
      {/* 1st row */}
      <div className="activity-row1">
        {/* 1st card */}
        <div className="activity-card0">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Milind Topno</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>
        <div className="activity-card0">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Yash Bansod</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd row */}
      <div className="activity-row2">
        <div className="activity-card1">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Name1</div>

          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="activity-card1">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Name1</div>

          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="activity-card1">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Name1</div>

          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="activity-card1">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Name1</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="activity-row3">
        <div className="activity-card1">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Name1</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="activity-card1">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Name1</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="activity-card1">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Name1</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="activity-card1">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Name1</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="activity-row4">
      <div className="activity-card0">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Bug</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div> */}
      <div className="activity-row1">
        {/* 1st card */}
        <div className="activity-card0">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Milind Topno</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div>
        {/* <div className="activity-card0">
          <img src={Horror} alt="" style={{ borderRadius: "50%" }} />
          <div className="card-content">Yash Bansod</div>
          <div className="card-social">
            <div className="github">
              <FaGithub />
            </div>
            <div className="linkedin">
              <FaLinkedin />
            </div>
          </div>
        </div> */}

        
      </div>
    </div>
  );
};

export default Team;
