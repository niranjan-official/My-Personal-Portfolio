import React from "react";
import "./About.css";
import "../../App.css";
import Fade from "../../Styles/Fade";
import profile from "../../assets/profile.png";
import Heading from "../../components/Heading/Heading";

function About() {
  return (
      <div className="h-max w-screen about">
        <Heading name="About Me" />
        <div className="w-full flex sm:flex-row-reverse flex-col sm:justify-evenly items-center">
            <div className="sm:w-1/2 flex justify-center items-center overflow-hidden">
         <Fade>
              <img src={profile} alt="" className="h-80 w-80 rounded-full border-2 border-teal-500"/>
          </Fade>
            </div>
            <div className="sm:w-1/2 sm:text-2xl text-xl p-8">
          <Fade>
              <p className="text-justify">
                I'm a Front-end web developer with a true passion for technology
                and all things digital. Over the past one year, I've delved deep
                into the world of web develpment, honing my skills and exploring
                the endless possibilities in this field offers.
              </p>
          </Fade>
            </div>
        </div>
      </div>
  );
}

export default About;
