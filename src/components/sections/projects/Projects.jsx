import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);

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
              <ProjectCard project={project} key={idx} setOpen={setOpen} />
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
      <Documentations isOpen={open} onClose={setOpen} />
    </>
  );
};

export default Projects;
// <div
//   className={`min-w-2xs max-w-sm  p-1 bg-gray-900  rounded-2xl backdrop-blur-lg
//            hover:bg-gray-900/70 hover:scale-101 hover:-translate-y-1 transition-all duration-300 ease-in-out `}
// >
//   <div className="w-full h-44 relative">
//     <img
//       src="./default_project.png"
//       alt="preview"
//       className="w-full h-full grayscale-0 object-cov er border rounded-xl text-gray-700"
//     />
//     <Link className="absolute top-2 right-2 p-2 bg-indigo-600  rounded-lg flex ">
//       <ExternalLinkIcon />
//     </Link>
//   </div>
//   <div className="py-6 ">
//     <h1 className="text-lg font-bold my-2 text-neutral-300 line-clamp-2">
//       {project?.title}
//     </h1>
//     <p className="text-sm text-neutral-500 line-clamp-3">{project?.desc}</p>
//   </div>
//   <div className="flex items-center justify-between text-sm">
//     <Link className=" px-6  py-2 whitespace-nowrap  rounded-lg bg-indigo-600 ">
//       Details
//     </Link>
//   </div>
// </div>;
