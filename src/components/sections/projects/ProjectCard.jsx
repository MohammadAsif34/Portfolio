import { Award, ExternalLink, FolderGit } from "lucide-react";
import React from "react";

const ProjectCard = ({ project, setOpen }) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 group">
        <div className="relative">
          <img
            src={"/default_image/default_project.png"}
            // alt={title}
            className="w-full h-40 object-cover"
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
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-indigo-500 w-8" />
            <h3 className="text-lg font-semibold t ext-gray-800 dark:text-gray-100">
              {project?.title}
            </h3>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-400 mb-2 line-clamp-3">
            {project?.desc}
          </p>
          <div className="flex justify-between">
            <a target="_blank" rel="noopener noreferrer" href={project.github}>
              <img src="/images/skills/git.svg" className="w-6" alt="" />
            </a>
            <button
              className=" px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition cursor-pointers"
              onClick={() => setOpen(true)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0"></div>
    </>
  );
};
export default ProjectCard;
