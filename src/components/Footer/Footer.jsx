import React from "react";
import "./Footer.css";
import instagram from "../../assets/contacts/insta.png";
import linkedIn from "../../assets/contacts/linkedIn.png";
import whatsapp from "../../assets/contacts/whatsapp.png";
import github from "../../assets/contacts/github.png";
import logo from "../../assets/logo.png";

function Footer() {
  const contacts = [
    {
      app: "instagram",
      link: "https://instagram.com/niranjanofficial__?igshid=NTc4MTIwNjQ2YQ==",
      src: instagram,
    },
    {
      app: "linkedIn",
      link: "http://www.linkedin.com/in/niranjansabarinath",
      src: linkedIn,
    },
    {
      app: "whatsapp",
      link: "https://api.whatsapp.com/send?phone=7736223205",
      src: whatsapp,
    },
    {
      app: "github",
      link: "https://github.com/niranjan-official",
      src: github,
    },
  ];
  return (
    <footer className="footer">
      <div className="con ml-2">
        <h3>Connect with me</h3>
        <div className="mt-2 contact">
          {contacts.map((obj,key) => (
            <a href={obj.link} className="cursor-pointer" key={key}>
              <img src={obj.src} alt={obj.app} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
