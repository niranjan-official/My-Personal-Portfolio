import React from "react";;
import Socials from "./Socials";

function Footer() {
  return (
    <footer className="w-full h-max bg-dark-1 p-4">
      <div className="flex flex-col gap-2">
        <h3>Connect with me</h3>
          <Socials mobileHide={false} />
      </div>
    </footer>
  );
}

export default Footer;
