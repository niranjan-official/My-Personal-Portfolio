import React from "react";
import "./Projects.css";
import Heading from "../../components/Heading/Heading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ecart from '../../assets/projects/ecart.jpg'
import netflix from '../../assets/projects/netflix.jpg'

function Projects() {
  const projects = [
    {
      name: "E-Cart",
      note: "I've delved deep into the world of web develpment, honing my skills and exploring the endless possibilities in this field offers.",
      image: ecart,
    },
    {
      name: "Netflix",
      note: "I've delved deep into the world of web develpment, honing my skills and exploring the endless possibilities in this field offers.",
      image: netflix,
    },
    {
      name: "Smart-Board",
      note: "I've delved deep into the world of web develpment, honing my skills and exploring the endless possibilities in this field offers.",
      image: netflix,
    },
  ];
  return (
    <div className="project">
      <Heading name="My Projects" />
      <div className="cards p-5">
        {projects.map((obj)=>(
          <ProjectCard name={obj.name} note={obj.note} image={obj.image}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
