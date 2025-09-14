import SectionTitle from "../../components/SectionTitle";
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 text-center text-white">
      <SectionTitle title="About Me" />
      <div className="max-w-3xl mx-auto text-[#cfcfcf]">
        <p className="leading-relaxed">
          I am Mohammad Asif, a B.Tech CSE student passionate about full-stack
          development, Python automation, and solving real-world problems
          through technology. I love creating impactful projects using the MERN
          stack and exploring problem-solving on platforms like LeetCode and
          GfG.
        </p>
      </div>
    </section>
  );
}
