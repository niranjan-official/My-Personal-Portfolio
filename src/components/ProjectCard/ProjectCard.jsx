import React from "react";
import "./ProjectCard.css";
import Fade from "../../Styles/Fade";

function ProjectCard({name,note,image}) {
  return (
    <Fade>
      <div className="card transform hover:scale-110">
        <div className="picture"><img src={image} className="shadow-xl shadow-black hover:scale-105"/></div>
        <div className="notes">
          <p>
            <h1 className="text-teal-500">{name}</h1>
            {note}
          </p>

          <button className="mt-4 w-40 hover:scale-110">Github</button>
        </div>
      </div>
    </Fade>
  );
}

export default ProjectCard;
