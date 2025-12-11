import React, { useState } from "react";
import CertificateView from "../../modal/CertificateView";
// import { slowScroll } from "../utils/SlowScroll";

const HeroSection = () => {
    const [open, setOpen] = useState(null);
  
  return (
    <>
      {/* {/* <div className=" border mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex"> */}
      <div className="  w-full h-[450px] md:h-[90vh] px-[8%] flex items-center max-md:flex-col ">
        {/* content  */}
        <div className=" flex-1 px-10 max-md:px-2 pt-6 md:pt-20 max-sm:text-sm z-20  ">
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
          </h1>
          <p className=" py-4 uppercase font-normal text-2xl italic my-4 tracking-tight text-shadow-2xs [text-shadow:2px_2px_4px_#00f5d4]">
            “Building cool things with code”
          </p>
          <p className="md:text-xl pb-8">
            — MERN Stack Developer <br />
            — Problem solver <br />— Who’s always learning and improving.
          </p>

          <div className=" flex items-center gap-x-6">
            <a
              href="#about"
              // onClick={() => slowScroll()}
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Get started
            </a>
            {/* <img src="/right.svg" alt="" /> */}
            <button onClick={()=>setOpen(true)} className="text-sm/6 font-semibold text-white">
              Explore Resume <span aria-hidden="true">→</span>
            </button>
            {/* <a href="#" className="text-sm/6 font-semibold text-white">
              Explore Resume <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>

        {/* image  */}
        <BannerImg />
      </div>
      {/* </div> */}
      <CertificateView
        image={"mohammadasif_resume.pdf"}
        key={"resume"}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default HeroSection;

const BannerImg = () => {
  return (
    <>
      <div className="hidden lg:block md:flex-1  h-0 md:h-full md:relative ">
        <div className="flex-1 md:relative flex justify-center items-center ">
          <div className="absolute  w-96 max-md:w-56 h aspect-square rounded-full bg-purple-400 to-[#ff00ff] blur-3xl opacity-"></div>
          <div className="md:relative z-10 w-[425px] ">
            <img
              src="/p3.png"
              alt="person"
              className="bg-transparent max-w-md-2xl scale-105  mt-4 drop-shadow-2xl drop-shadow-purple-500 rounded-full "
              decoding="async"
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>

        <div className="w-full h-full absolute top-0 left-0 flex  justify-center items-center blur-[1px] ">
          <div className="w-56  md:w-96 aspect-square rounded-full border-24 translate-y-10 border-violet-500 -600 shadow-2xl shadow-purple-500"></div>
        </div>
        <div className="absolute top-25 left-0 blur-xs ">
          <img src="/right.svg" alt="" className="w-30" />
        </div>
        <div className=" absolute bottom-16 right-0 blur-xs ">
          <img src="/right.svg" alt="" className="w-30 rotate-180 " />
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex  justify-center items-center">
          {/* <div className=" w-96 h-96 rou  nded-full border-24 translate-y-10 border-violet-500 -600"></div> */}
        </div>
      </div>
    </>
  );
};
