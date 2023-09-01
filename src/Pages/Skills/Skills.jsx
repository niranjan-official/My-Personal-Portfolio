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
    }
  ];
  return (
    <div className="skills">
      <div className="heading">
        <hr style={{ borderColor: "aqua" }} className="first w-40 mt-8 mr-4" />
        <h1>My Skills</h1>
        <hr style={{ borderColor: "aqua" }} className="last w-40 mt-8 ml-4" />
      </div>
      <p>
        Focusing on Front-end mainly on ReactJS along with various other skills
      </p>
      <div className="skillBars">
        {skills.map((obj) => (
          <div className="eachBar">
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
