import React from "react";
import "./About.css";
import "../../App.css";
import Fade from "../../Styles/Fade";
import profile from "../../assets/profile.png";

function About() {
  return (
    <section>
      <div className="about d-flex">
        <Fade>
          <div className="heading">
            <hr
              style={{ borderColor: "aqua" }}
              className="first w-40 mr-4 mt-8"
            />
            <h1>About Me</h1>

            <hr
              style={{ borderColor: "aqua" }}
              className=" last w-40 ml-4 mt-8"
            />
          </div>
        </Fade>
        <div className="about-content">
          <Fade>
            <div className="profile-pic">
              <img src={profile} alt="" />
            </div>
          </Fade>
          <Fade>
            <div className="about-note">
              <p>
                I'm a Frond-end web developer with a true passion for technolog
                and all things digital. Over the past one year, I've delved deep
                into the world of web develpment, honing my skills and exploring
                the endless possibilities this field offers.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
