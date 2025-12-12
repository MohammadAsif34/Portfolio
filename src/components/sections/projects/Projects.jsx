import React, { useEffect, useState } from "react";
import {
  Award,
  ExternalLink,
  ExternalLinkIcon,
  MoreHorizontal,
  MoreVertical,
  Share,
  Share2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../../data/my_dataset";
import SectionTitle from "../../component/SectionTitle";
import ProjectCard from "./ProjectCard";
import Documentations from "../../modal/Documentations";

const Projects = () => {
  const [size, setSize] = useState(8);

  const handlemore = () => {
    if (size < projects.length) setSize((p) => p + 4);
    else setSize(8);
  };

  return (
    <>
      <section id="projects" className="py-14 scroll-mt-10">
        <div className=" scroll-mt-10 relative">
          <SectionTitle title={"Projects"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  flex-wrap  gap-x-4 gap-y-10 ">
            {projects.slice(0, size).map((project, idx) => (
              <ProjectCard project={project} key={idx} />
            ))}
          </div>
          <div className="py-10 text-center">
            {projects.length > 8 && (
              <button
                onClick={handlemore}
                className="px-4 py-2 border rounded-xl cursor-pointer hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300 ease-in-out "
              >
                {size == projects.length ? "See less" : "See more"}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
