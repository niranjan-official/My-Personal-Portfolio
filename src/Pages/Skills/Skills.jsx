import React, { useEffect, useState } from "react";
import "./Skills.css";
import SkillBar from "../../components/SkillBar/SkillBar";
import Reveal from "../../Styles/Reveal";
import Heading from "../../components/Heading/Heading";
import {  collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";

function Skills() {

  const [skills,setSkill] = useState([])
  useEffect(() => {
    getSkills();
  }, []);
  const getSkills = async () => {
    const querySnapshot = await getDocs(collection(db, "skills"));
    let dataArray = []
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data())
    });
    console.log(dataArray);
    setSkill(dataArray)
  };
 
  return (
    <div className="w-screen h-max">
      <Heading name="My Skills" />
      <div className="flex flex-wrap p-4 justify-evenly">
        {skills.map((obj, key) => (
          <div className="p-4" key={key}>
            <Reveal>
              <SkillBar
                name={obj.skill}
                percentage={obj.percentage}
                src={obj.imageData}
              />
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
