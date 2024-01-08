import React, { useState } from "react";
import "./ProjectCard.css";
import Fade from "../../Styles/Fade";

function ProjectCard({ name, note, image, src }) {
  return (
    <Fade>
      <div className="card h-max p-4 rounded-lg shadow-md mr-4 mb-8 sm:mb-4  transform hover:scale-110">
        <div>
          <img src={image} className="shadow-md shadow-black hover:scale-105 h-40 sm:h-48 w-full" />
        </div>
        <div className="notes p-4 flex flex-col">
            <h1 className="text-teal-500 text-5xl">{name}</h1>
          <p className="mt-4">
            {note}
          </p>

          <a href={src} className="mt-4 mb2 w-40 hover:scale-110">
            Github
          </a>
        </div>
      </div>
    </Fade>
  );
}

export default ProjectCard;
