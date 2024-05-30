import React from "react";
import SkillBox from "@/components/SkillBox";
import { skills } from "@/constants";
import Fade from "@/Styles/Fade";

function About() {
  return (
    <section
      id="about"
      className="w-full h-max px-10 md:px-28 py-8 md:py-14 bg-dark-2 poppins"
    >
      <div className="w-full flex flex-col items-center">
        <h4 className="text-3xl font-bold">What I Do</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-sm:gap-8 w-full mt-12">
          {skills.map((skill, index) => (
            <Fade>
              <SkillBox
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
