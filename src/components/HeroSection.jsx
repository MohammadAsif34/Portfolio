import React from "react";
import { slowScroll } from "../utils/SlowScroll";

const HeroSection = () => {
  return (
    <>
      {/* {/* <div className=" border mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex"> */}
      <div className="  w-full md:h-[90vh] px-[8%] flex items-center max-md:flex-col">
        <div className=" flex-1 px-10 max-md:px-2 max-md:pt-20 max-sm:text-sm ">
          <h1 className="text-3xl font-thin tracking-widest leadi text-balance text-white sm:text-4xl">
            <span className="text-indigo-400">Hello</span>, I'm
            <p
              className=" uppercase font-normal max-md:text-2xl text-4xl my-4 tracking-tight text-shadow-2xs [text-shadow:2px_2px_4px_#00f5d4]"
              style={{
                textShadow: `0 0 2px #00f5d4, 0 0 10px #00f5d4, 0 0 100px #00f5d4`,
              }}
            >
              Mohammad Asif Hasnain
            </p>
            <p className=" uppercase font-normal max-md:text-xs my-4 tracking-tight text-shadow-2xs [text-shadow:2px_2px_4px_#00f5d4]">
              Mern Stack Developer
            </p>
            <p className=" uppercase font-normal max-md:text-xs my-4 tracking-tight text-shadow-2xs [text-shadow:2px_2px_4px_#00f5d4]">
              Python Developer
            </p>
            <p className=" uppercase font-normal max-md:text-xs my-4 tracking-tight text-shadow-2xs [text-shadow:2px_2px_4px_#00f5d4]">
              Problem Solver
            </p>
          </h1>
          {/* <p className="text-s m text-pretty text-gray-400 my-6">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat. Anim
            aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p> */}
          <div className=" flex items-center gap-x-6">
            <button
              onClick={() => slowScroll()}
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Get started
            </button>
            {/* <img src="/right.svg" alt="" /> */}
            <a href="#" className="text-sm/6 font-semibold text-white">
              Explore CV <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="flex-1 relative ">
          <div className="flex-1 relative flex justify-center items-center">
            <div className="absolute w-96 max-md:w-56 h-96 max-md :h-56 rounded-full bg-purple-400 to-[#ff00ff] blur-3xl opacity-"></div>
            <div className="relative z-10 p-12">
              <img
                src="/person.png"
                alt="person"
                className="bg-transparent max-w-md-lg  drop-shadow-2xl drop-shadow-purple-500 rounded-full b lur-[1px]"
              />
            </div>
          </div>

          <div className="w-full h-full absolute top-0 left-0 flex  justify-center items-center blur-[1px] ">
            <div className="w-56  md:w-96 h-56 md:h-96 rounded-full border-24 translate-y-10 border-violet-500 -600 shadow-2xl shadow-purple-500"></div>
          </div>
          <div className="absolute top-25 left-0 blur-xs ">
            <img src="/right.svg" alt="" className="w-30" />
          </div>
          <div className=" absolute bottom-16 right-0 blur-xs ">
            <img src="/right.svg" alt="" className="w-30 rotate-180 " />
          </div>
          <div className="w-full h-full absolute top-0 left-0 flex  justify-center items-center">
            {/* <div className=" w-96 h-96 rounded-full border-24 translate-y-10 border-violet-500 -600"></div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default HeroSection;
