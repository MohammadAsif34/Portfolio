import React from "react";
import projects from "../../data/projectData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div id="projects" className=" pt-8 pb-20 scroll-mt-10 relative">
        <h1 className="pb-20 text-4xl text-center font-bold text-gray-400">
          Projects
        </h1>
        <div className="relative">
          <div className="hidden  absolute inset-0 md:flex flex-col items-center gap-x-50 gap-y-2 ">
            {projects.map((_, idx) => {
              if (idx % 2 == 0) {
                return (
                  <>
                    <div
                      className={` w-2 ${
                        idx == 0 ? "h-60" : "h-100"
                      } border border-purple-500 rounded-2xl blur-[1px] `}
                      style={{
                        boxShadow: `rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;`,
                      }}
                    ></div>
                    <div className="flex items-center gap-x-5  -translate-x-1/2">
                      <div className=" w-10 h-2 border border-purple-500 rounded-full blur-[2px] shadow-sm shadow-purple-500"></div>
                      {/* <div className="w-4 h-4 bg-purple-500 rounded-full blur"></div> */}
                    </div>
                    {/* <svg
                      width="27"
                      height="918"
                      viewBox="0 0 27 918"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                      d="M27 904.998V14.4985C27 -4.49997 8.6492e-05 -5.00004 2.54569e-05 14.4985V904.998C1.75691e-05 920.5 27 922 27 904.998Z"
                      fill="#8E51FF"
                      />
                      </svg> */}
                  </>
                );
              } else {
                return (
                  <>
                    {/* <svg
                    width="170"
                    height="498"
                    viewBox="0 0 170 498"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    d="M169 435.136V6.942C169 -2.19338 142 -2.43384 142 6.942V435.136C142 442.59 169 443.311 169 435.136Z"
                    fill="#8E51FF"
                    />
                    <path
                    d="M106.564 471H1.70008C-0.537154 471 -0.596042 498 1.70008 498H106.564C108.389 498 108.566 471 106.564 471Z"
                    fill="#8E51FF"
                    />
                    <path
                    d="M165.899 472.627C169.86 476.842 170.939 486.503 165.899 492.923C160.859 499.342 150.36 498.842 145.011 492.923C139.663 487.003 139.663 478.412 145.011 472.627C150.36 466.842 161.86 468.842 165.899 472.627Z"
                    fill="#8E51FF"
                    />
                    </svg> */}
                    <div className="h-26 p-1 rounded-xl border border-purple-500 blur-[1px]"></div>
                    <div className="flex items-center gap-x-5  translate-x-1/2">
                      <div className="w-10 h-2 border border-purple-500 rounded-full blur-[1px]"></div>
                      {/* <div className=" w-10 h-2 bg-purple-500 rounded-full blur"></div> */}
                    </div>
                  </>
                );
              }
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-x-50 gap-y-10 ">
            {projects.map((project, idx) => (
              <>
                <div
                  className={`md:hidden ${
                    idx == 0 && "hidden"
                  } w-2 h-10 bg-purple-500 rounded-full blur-[4px]`}
                ></div>
                <div
                  className={`min-w-2xs max-w-sm h-fit p-4 bg-gray-900/50  rounded-2xl backdrop-blur-lg ${
                    idx % 2 != 0 ? "md:mt-40" : ""
                  } hover:bg-gray-900/70 hover:scale-101 hover:rotate-1 transition-all duration-300 ease-in-out`}
                >
                  <div className="w-full h-56">
                    <img
                      src="./default_project.png"
                      alt="preview"
                      className="w-full h-full object-cov er border rounded-xl text-gray-700"
                    />
                  </div>
                  <div className="py-6 ">
                    <h1 className="text-xl font-semibold my-2 text-neutral-300">
                      {project?.title}
                    </h1>
                    <p className="text-sm text-neutral-500">{project?.desc}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link className="mx-4 px-4 py-1 whitespace-nowrap text-neutral-500 border rounded-lg hover:text-purple-500 ">
                      Details
                    </Link>
                    <Link className="mx-4 px-4 py-1 text-neutral-500 hidden md:block  rounded-lg hover:text-purple-500 ">
                      <i className="bi bi-github text-2xl "></i>
                    </Link>
                    <Link className="mx-4 px-4 py-1 text-blue-500 border rounded-lg ">
                      Preview
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
