import React from "react";
import "./Feedback.css";
import Fade from "../../Styles/Fade";

function Feedback() {
  return (
    <div className="feedback">
      <form action="">
        <div>
          <div className="name">
            <input type="text" placeholder="Your Name" required/>
          </div>
          <div className="email">
            <input type="email" placeholder="Email" required/>
          </div>
          <div className="subject">
            <input type="text" placeholder="Subject" required/>
          </div>
          <div className="message">
            <input type="text" placeholder="Message" required/>
          </div>
        </div>

        <div className="submit">
          <Fade>
            <button type="submit" className="shadow-inner shadow-teal-600 text-teal-400">
              Send Message
            </button>
          </Fade>
        </div>
      </form>
    </div>
  );
}

export default Feedback;
