import { NavbarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const NavList = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let foundSection = false;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if the section is within the viewport
        if (
          scrollPosition >= sectionTop - windowHeight / 2 &&
          scrollPosition < sectionBottom - windowHeight / 2
        ) {
          setActiveSection(section.id);
          console.log("Active section changed: " + section.id);
          foundSection = true;
        }
      });

      if (!foundSection) {
        setActiveSection('home'); // Default to 'home' or any other default section
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const offset = 80; // Adjust this value to match the height of your fixed navbar

    if (section) {
      const sectionTop = section.offsetTop;
      const scrollToPosition = sectionTop - offset;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId); // Manually set the active section
    }
  };

  return (
    <div className="flex items-center gap-4 lg:gap-10 max-sm:hidden pl-20">
      {NavbarLinks.map((link, key) => (
        <div
          key={key}
          className={cn(
            "flex items-center gap-1 pb-1 transition-all duration-300 ",
            {
              "border-b-2 border-primary text-primary": activeSection === link.name,
            }
          )}
        >
          <a
            href={link.route}
            onClick={(event) => handleNavClick(event, link.name)}
          >
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default NavList;
