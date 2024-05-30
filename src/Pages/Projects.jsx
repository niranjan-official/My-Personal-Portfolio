import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "@/constants";
import Reveal from "@/Styles/Reveal";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full h-max px-6 sm:px-10 md:px-28 py-8 md:py-14 bg-dark-1 poppins"
    >
      <div className="w-full flex flex-col items-center">
        <h3 className="text-3xl font-bold">Projects</h3>
        <div className="w-full flex flex-col gap-8 mt-8 items-center">
          {projects.map((project, index) => (
            <Reveal key={index} >
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                image={project.image}
                description={project.description}
                index={index}
                techStack={project.techStack}
                githubLink={project.githubLink}
                websiteLink={project.websiteLink}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
