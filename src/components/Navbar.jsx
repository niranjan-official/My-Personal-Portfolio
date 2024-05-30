import React from "react";
import NavList from "./NavList";
import MobileNav from "./MobileNav";
import Socials from "./Socials";
import Fade from "@/Styles/Fade";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 sm:px-10 md:px-16 lg:px-24  py-4 xl:py-8 text-white select-none bg-dark-1 fixed z-50">
      <Fade>
        <span className="magmawave text-5xl text-primary">N</span>
      </Fade>
      <Fade>
        <NavList />
      </Fade>
      <Fade>
        <Socials mobileHide={true} />
      </Fade>  
        <MobileNav />
    </div>
  );
};

export default Navbar;
