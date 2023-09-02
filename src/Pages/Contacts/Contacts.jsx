import React from "react";
import "./Contacts.css";
import Heading from "../../components/Heading/Heading";
import Feedback from "../../components/Feedback/Feedback";
import Fade from "../../Styles/Fade";

function Contacts() {
  return (
    <div className="contacts">
      <Heading name="Contact Me" />
      <div className="form">
        <Feedback />
      </div>
    </div>
  );
}

export default Contacts;
