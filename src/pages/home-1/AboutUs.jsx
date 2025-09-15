import React from "react";
import { about } from "../../data/about";

const AboutUs = () => {
  return (
    <>
      <div id="about" className=" pt-8 pb-20 scroll-mt-10 scroll-smooth ">
        <h1 className="pb-10 text-4xl text-center font-bold text-gray-400">
          About Us
        </h1>
        <div className="md:flex max: ">
          <div className="flex-1/3  flex justify-center items-center">
            <img
              src="/person.png"
              alt="person"
              className="w-60 aspect-square rounded-fullobject-cover  -translate-y-10 drop-shadow-[25px_50px_50px] drop-shadow-purple-500"
              decoding="async"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <p className="flex-2/3 px-10 text-justify font-thin indent-5">
            {about}
            <div className="text-end">
              <button className="font-light text-blue-400 cursor-pointer hover:underline">
                Read more
              </button>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
