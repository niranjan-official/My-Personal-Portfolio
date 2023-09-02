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
      note: "My personal website, built using ReactJS, used tools like framer-motion, vite, tailwind css etc. Hosted on Github Pages.",
      image: portfolio,
      src: "https://github.com/niranjan-official/My-Personal-Portfolio",
    },
    {
      name: "City-Clean",
      note: "An IOT based website used to monitor real-time waste bin quantity, built using pure html. Hosted on Github.",
      image: cityclean,
      src: "https://github.com/vineethkv7736/City-clean",
    },
    {
      name: "Smart-Board",
      note: "An IOT based web app to handle switch-boards in our home, used multiple firebase-services including hosting.",
      image: smartboard,
      src: "https://github.com/niranjan-official/Smart-Board-React",
    },
    {
      name: "E-Cart",
      note: "An E-commerce website built using NodeJS, MongoDB, ExpressJS, handlebars, also integrated payment gateway (RazorPay). ",
      image: ecart,
      src: "https://github.com/niranjan-official/E-CART",
    },
    {
      name: "Netflix",
      note: "A clone of Netflix web app, first ReactJS project, used axios npm and TMDB database, haven't hosted since it was done for practice.",
      image: netflix,
      src: "https://github.com/niranjan-official/Netflix-Clone",
    },
  ];
  return (
    <section id="projects">
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
    </section>
  );
}

export default Projects;
