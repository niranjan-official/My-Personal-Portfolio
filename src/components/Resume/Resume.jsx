import React from "react";
import "./Resume.css";
import resume from '../../assets/resume/resume_latest.pdf'
import downloadIcon from '../../assets/download_icon.png'

function Resume() {
  return (
    <div className="resume-bg">
      <a href={resume} download="NiranjanS_Resume.pdf">
        <div className="resume-button flex-col shadow-inner shadow-teal-500 text-teal-400">
          <span>Download</span>
          <img className="mt-2" src={downloadIcon}/>
        </div>
      </a>
    </div>
  );
}

export default Resume;
