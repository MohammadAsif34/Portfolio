import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import skills from "../data/skillsData";
import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#0a0f1c]">
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <SkillCard key={i} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
