import React from "react";
import Feedback from "../components/Feedback";
import contactLogo from "../assets/contact.svg";

function Contacts() {
  return (
    <section
      id="contacts"
      className="w-full h-max md:h-screen px-6 md:px-28 py-8 md:py-14 flex items-center bg-dark-2"
    >
      <div className="w-full sm:w-1/2 flex flex-col">
        <h4 className="text-3xl font-bold">Contact Me</h4>
        <div className="w-full flex items-center">
          <Feedback />
        </div>
      </div>
      <div className="w-1/2 max-sm:hidden">
          <img src={contactLogo} className="h-full w-auto" alt="" />
      </div>
    </section>
  );
}

export default Contacts;
