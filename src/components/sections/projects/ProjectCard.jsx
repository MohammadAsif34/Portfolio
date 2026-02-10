import { Award, ExternalLink, FolderGit } from "lucide-react";
import React, { useState } from "react";
import Documentations from "../../modal/Documentations";
import Button from "../../component/Button";

const ProjectCard = ({ project, idx }) => {
  const [open, setOpen] = useState(false);
  const [repo, setRepo] = useState(null);

  const handleDetails = (repo) => {
    setRepo(repo);
    setOpen(true);
  };
  return (
    <>
      <div
        className={`mx-auto max-w-6xl bg-white p-4 dark:bg-gray-900 rounded-xl shadow-md flex gap-4
  ${idx % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}
  max-lg:flex-col overflow-hidden group
  hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
      >
        {/* image  */}
        <div className="relative flex-1">
          <img
            src={project?.picture || "/default_image/default_project.png"}
            // alt={title}
            className="w-full h-72 object-cover rounded-xl"
          />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden absolute bottom-2 right-2 p-2  text-sm font-medium text-white bg-indigo-500/70 rounded hover:bg-indigo-700 transition group-hover:flex gap-2 cursor-pointer"
          >
            <span>Preview</span>
            <ExternalLink size={20} />
          </a>
        </div>

        {/* info  */}
        <div className="pt-4 flex-1 flex flex-col">
          <h3 className="sm:text-lg md:text-2xl text-center font-semibold  ">
            {project?.title}
          </h3>
          <div className="flex-1 p-4 ">
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-2 line-clamp-5 text-justify">
              {project?.desc}
            </p>
            <div className="max-h-20 py-1.5 overflow-hidden flex flex-wrap justify-center  gap-3">
              {project?.tech.map((i, idx) => (
                <div
                  key={idx}
                  className="px-4 py-1 border border-gray-700 text-gray-600 rounded-md text-xs"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div className={`flex justify-center gap-4 `}>
            {/* <a target="_blank" rel="noopener noreferrer" href={project.github}>
              <img src="/images/skills/git.svg" className="w-6" alt="" />
            </a> */}

            {/* <button
              className=" px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition cursor-pointers"
              onClick={() => handleDetails(project.github)}
            >
              Details
            </button> */}
            <Button
              title={"info"}
              className={"bg-none! border text-gray-500!"}
              onclick={() => handleDetails(project.github)}
            />
            {/* <Button
              title={"Code"}
              onclick={() => handleDetails(project.github)}
            /> */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 text-white rounded-md bg-gradient-to-tr from-indigo-500  to-purple-600 hover:to-indigo-500  hover:from-purple-600 transition-all duration-00 ease-in-out cursor-pointer `}
            >
              Code
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2 text-white rounded-md bg-gradient-to-tr from-indigo-500  to-purple-600 hover:to-indigo-500  hover:from-purple-600 transition-all duration-00 ease-in-out cursor-pointer `}
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <Documentations isOpen={open} onClose={setOpen} repo={repo} />
      <div className="absolute top-0 left-0"></div>
    </>
  );
};
export default ProjectCard;
