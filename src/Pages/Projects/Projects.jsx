import React from "react";
import "./Projects.css";
import Heading from "../../components/Heading/Heading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ecart from "../../assets/projects/ecart.jpg";
import netflix from "../../assets/projects/netflix.jpg";
import smartboard from "../../assets/projects/smartboard.jpg";
import portfolio from "../../assets/projects/portfolio.jpg";
import cityclean from "../../assets/projects/cityclean.jpg";

function Projects() {
  const projects = [
    {
      name: "Portfolio",
      note: "I've delved deep into the world of web develpment, honing my skills and exploring the endless possibilities in this field offers.",
      image: portfolio,
      src: "https://github.com/niranjan-official/My-Personal-Portfolio",
    },
    {
      name: "City-Clean",
      note: "I've delved deep into the world of web develpment, honing my skills and exploring the endless possibilities in this field offers.",
      image: cityclean,
      src: "https://github.com/vineethkv7736/City-clean",
    },
    {
      name: "Smart-Board",
      note: "I've delved deep into the world of web develpment, honing my skills and exploring the endless possibilities in this field offers.",
      image: smartboard,
      src: "https://github.com/niranjan-official/Smart-Board-React",
    },
    {
      name: "E-Cart",
      note: "I've delved deep into the world of web develpment, honing my skills and exploring the endless possibilities in this field offers.",
      image: ecart,
      src: "https://github.com/niranjan-official/E-CART",
    },
    {
      name: "Netflix",
      note: "I've delved deep into the world of web develpment, honing my skills and exploring the endless possibilities in this field offers.",
      image: netflix,
      src: "https://github.com/niranjan-official/Netflix-Clone",
    },
  ];
  return (
    <div className="project">
      <Heading name="My Projects" />
      <div className="cards p-5">
        {projects.map((obj) => (
          <ProjectCard
            name={obj.name}
            note={obj.note}
            image={obj.image}
            src={obj.src}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
