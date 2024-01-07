import React from "react";
import "./SkillBar.css";
import ProgressBar from "@ramonak/react-progress-bar";

function SkillBar({ name, percentage, src }) {
  return (
    <div className="bar mt-6 flex flex-col h-fit shadow-md shadow-teal-500">
      <div className="flex p-3">
        <div>
          <img src={src} className="h-12 w-auto"/>
        </div>
        <div className="w-full text-center">
          <h3 className="text-3xl">{name}</h3>
        </div>
      </div>
      <div>
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
