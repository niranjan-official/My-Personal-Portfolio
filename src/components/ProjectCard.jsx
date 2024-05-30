import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

import Fade from "../Styles/Fade";

function ProjectCard({ title, subtitle, image, description, index ,techStack,githubLink,websiteLink}) {
  return (
    <div className={`w-full h-auto flex ${index%2===0 && 'flex-row-reverse'} max-md:flex-col bg-primary text-black p-4 md:p-8 rounded-[0.6rem] shadow-md`}>
      <img src={image} className="w-full md:w-1/2 h-auto shadow-md" alt="" />
      <div className={`w-full sm:w-1/2 max-sm:pt-4 ${index%2===0 ? 'sm:pr-4' : 'sm:pl-4'} `}>
        <h4 className="font-bold text-2xl" >{title}</h4>
        <h5 className="text-neutral-700"><i>{subtitle}</i></h5>
        <p className="mt-4 text-sm lg:text-base" >
          {description}
        </p>
        <div className="flex flex-col mt-4">
          <span className="font-semibold">Tech Stacks :</span>
          <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
          {
            techStack.map((stack,index)=>(
              <div key={index} className="bg-dark-2 text-primary rounded-[0.3rem] shadow-md p-2">
                {stack}
              </div>
            ))
          }
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <span className="font-semibold">Links :</span>
          <div className="w-full max-sm:justify-center flex mt-1 gap-4">
            <a href={githubLink} className="flex items-center gap-2 rounded-3xl px-4 py-1 hover:text-primary hover:bg-black/90 border-2 border-dark-1"><FaGithub size={20}/> Github</a>
            <a href={websiteLink} className="flex items-center gap-2 rounded-3xl px-4 py-1 text-primary bg-black/90 hover:text-black hover:bg-transparent border-2 border-dark-1"><FaGlobe size={20} /> Website</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
