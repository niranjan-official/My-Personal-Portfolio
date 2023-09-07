import React from "react";
import "./Contacts.css";
import Heading from "../../components/Heading/Heading";
import Feedback from "../../components/Feedback/Feedback";
import Fade from "../../Styles/Fade";
import Resume from "../../components/Resume/Resume";

function Contacts() {
  return (
    <section id="contacts">
      <div className="contacts">
        <div className="contact-side">
          <Heading name="Contact Me" />
          <div className="form">
            <Feedback />
          </div>
        </div>
        <div className="resume-side">
          <Heading name="Resume" />
          <div className="download">
            <Fade>
              <Resume />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
