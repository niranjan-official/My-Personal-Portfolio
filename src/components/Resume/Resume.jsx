import React from "react";
import "./Resume.css";
import resume from '../../assets/resume/resume_latest.pdf'
import downloadIcon from '../../assets/download_icon.png'

function Resume() {
  return (
    <div className="resume-bg p-12 rounded-lg">
      <a href={resume} download="NiranjanS_Resume.pdf">
        <div className="resume-button h-40 w-40 flex flex-col justify-center items-center rounded-full shadow-inner shadow-teal-500 text-teal-400 hover:scale-110">
          <span className="p-2 mt-2 pb-1 text-xl">Download</span>
          <img className="h-14 w-auto" src={downloadIcon}/>
        </div>
      </a>
    </div>
  );
}

export default Resume;
