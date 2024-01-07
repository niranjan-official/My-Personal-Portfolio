import React from "react";
import Heading from "../../components/Heading/Heading";
import Feedback from "../../components/Feedback/Feedback";
import Fade from "../../Styles/Fade";
import Resume from "../../components/Resume/Resume";

function Contacts() {
  return (
      <div className="contacts w-screen h-max p-4 flex flex-col items-center sm:items-start">
          <Heading name="Contact Me" />
          <div className="w-full sm:pl-20 flex items-center">
            <Feedback />
          </div>

          <Heading name="Resume" />
          <div className=" w-full flex justify-center">
            <Fade>
              <Resume />
            </Fade>
          </div>
      </div>
  );
}

export default Contacts;
