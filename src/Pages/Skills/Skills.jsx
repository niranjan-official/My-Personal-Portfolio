import React from "react";
import "./Skills.css";
import SkillBar from "../../components/SkillBar/SkillBar";

import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import javascript from "../../assets/skills/javascript.png";
import react from "../../assets/skills/react.png";
import nodejs from "../../assets/skills/nodejs.png";
import mongodb from "../../assets/skills/mongodb.png";
import C from "../../assets/skills/C.png";
import python from "../../assets/skills/python.png";
import java from "../../assets/skills/java.png";
import firebase from "../../assets/skills/firebase.png";
import Reveal from "../../Styles/Reveal";
import Heading from "../../components/Heading/Heading";

function Skills() {
  const skills = [
    {
      name: "HTML",
      percentage: 95,
      logo: html,
    },
    {
      name: "CSS",
      percentage: 90,
      logo: css,
    },
    {
      name: "Javascript",
      percentage: 85,
      logo: javascript,
    },
    {
      name: "ReactJS",
      percentage: 80,
      logo: react,
    },
    {
      name: "NodeJS",
      percentage: 75,
      logo: nodejs,
    },
    {
      name: "MongoDB",
      percentage: 70,
      logo: mongodb,
    },
    {
      name: "C-language",
      percentage: 95,
      logo: C,
    },
    {
      name: "Java",
      percentage: 75,
      logo: java,
    },
    {
      name: "Python",
      percentage: 85,
      logo: python,
    },
  ];
  return (
      <div className="w-screen h-max">
        <Heading name="My Skills" />
        <div className="flex flex-wrap p-4 justify-evenly">
          {skills.map((obj,key) => (
            <div className="p-4" key={key}>
              <Reveal>
                <SkillBar
                  name={obj.name}
                  percentage={obj.percentage}
                  src={obj.logo}
                />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Skills;
