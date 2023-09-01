import React from "react";
import "./About.css";
import "../../App.css";
import Fade from "../../Styles/Fade";
import profile from "../../assets/profile.png";
import Heading from "../../components/Heading/Heading";

function About() {
  return (
    <section>
      <div className="about d-flex">
          <Heading name="About Me"/>
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
                the endless possibilities in this field offers.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
