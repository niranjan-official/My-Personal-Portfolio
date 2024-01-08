import React, { useEffect, useState } from "react";
import "./Projects.css";
import Heading from "../../components/Heading/Heading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/config";

function Projects() {

  const [projects,setProjects] = useState([])

  useEffect(()=>{
    getProjects();
  },[])

  const getProjects = async()=>{
    const querySnapshot = await getDocs(collection(db, "projects"));
    let dataArray = []
    querySnapshot.forEach((doc) => {
      dataArray.push(doc.data())
    });
    console.log(dataArray);
    setProjects(dataArray)
  }

  return (
      <div className="project w-screen h-max">
        <Heading name="My Projects" />
        <div className="cards flex flex-col sm:flex-row items-center sm:overflow-x-scroll overflow-y-hidden p-5">
          {projects.map((obj,key) => (
            <ProjectCard
              name={obj.name}
              note={obj.info}
              image={obj.imageData}
              src={obj.src}
              key={key}
            />
          ))}
        </div>
      </div>
  );
}

export default Projects;
