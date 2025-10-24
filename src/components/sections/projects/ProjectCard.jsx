import { Award, ExternalLink } from "lucide-react";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="b g-white dark: bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 group">
        <div className="relative">
          <img
            src={"/default_project.png"}
            // alt={title}
            className="w-full h-40 object-cover"
          />
          <a
            href={"https://www.elgoog.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden absolute top-2 right-2 p-2 text-sm font-medium text-white bg-indigo-500 rounded-xl hover:bg-indigo-700 transition group-hover:block cursor-pointer"
          >
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

          {/* <a
            // href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Details
          </a> */}
          <button
            onClick={() => alert("Something error : may be link broken")}
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
};
export default ProjectCard;
