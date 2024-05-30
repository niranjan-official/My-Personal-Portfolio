import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Socials = ({mobileHide}) => {
  return (
    <div className={`${mobileHide && "max-sm:hidden"} flex gap-4 text-white`}>
      <a href="https://api.whatsapp.com/send?phone=7736223205">
        <IoLogoWhatsapp size={25} />
      </a>
      <a href="http://www.linkedin.com/in/niranjansabarinath">
        <FaLinkedin size={25} />
      </a>
      <a href="https://github.com/niranjan-official">
        <FaGithub size={25} />
      </a>
    </div>
  );
};

export default Socials;
