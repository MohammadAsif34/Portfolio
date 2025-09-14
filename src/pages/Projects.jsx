import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectData";
import React from "react";

// import projects from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <SectionTitle title="Projects" />
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
