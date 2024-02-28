"use client";
import dynamic from "next/dynamic";
// import ProjectsData from "./ProjectsData";
const ProjectsData = dynamic(() => import("./ProjectsData"));
const Projects = () => {
  return (
    <section>
      {console.log("project rendered")}
      <ProjectsData />
    </section>
  );
};

export default Projects;
