import React from "react";
import "./Contacts.css";
import Heading from "../../components/Heading/Heading";
import Feedback from "../../components/Feedback/Feedback";
import Fade from "../../Styles/Fade";

function Contacts() {
  return (
    <section id="contacts">
      <div className="contacts">
        <Heading name="Contact Me" />
        <div className="form">
          <Feedback />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
