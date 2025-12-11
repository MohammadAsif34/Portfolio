import React, { useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import { about } from "../../../data/my_dataset";

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative py-16 scroll-mt-20 bg-gradient-to-br rounded-2xl from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <SectionTitle title="About Me" />

        <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <img
                src="/p2.png"
                alt="person"
                className="relative w-72 aspect-square object-cover object-top rounded-full shadow-2xl border-4 border-gray-700 transition-transform duration-500 group-hover:scale-105"
                decoding="async"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p
              className={`transition-all duration-500 ease-in-out ${
                expanded ? "line-clamp-none" : "line-clamp-5"
              }`}
            >
              {about}
            </p>

            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center text-indigo-400 font-medium hover:text-indigo-300 transition-all"
            >
              {expanded ? "Show Less ▲" : "Read More ▼"}
            </button>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Quick Highlights
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✔</span> Passionate about
                  building real-world software solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✔</span> Experienced in MERN
                  Stack and AI-driven applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">✔</span> Always exploring
                  new technologies and creative problem-solving
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative Gradient Glow */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-600/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-600/20 blur-3xl rounded-full"></div>
      </div>
    </section>
  );
};

export default AboutUs;
