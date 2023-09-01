import React from "react";
import "./SkillBar.css";
import ProgressBar from "@ramonak/react-progress-bar";

function SkillBar({name,percentage,src}) {
  return (
    <div className="bar shadow-md shadow-teal-500">
      <div className="box">
        <div className="logo"><img src={src}/></div>
        <div className="text">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="p-bar">
        <ProgressBar 
        completed={percentage}
        bgColor="rgb(0, 223, 223)"
        height="7px"
        borderRadius="0"
        baseBgColor="#000"
        customLabel=" "
        />
      </div>
    </div>
  );
}

export default SkillBar;
