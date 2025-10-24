import React from "react";
import SectionTitle from "../../component/SectionTitle";
import SkillCard from "./SkillCard";
import { skills } from "../../../data/my_dataset";

export default function Skills() {
  return (
    <section id="skills" className="py-14 scroll-mt-10 ">
      <div className="">
        <SectionTitle title="Skills" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  mx-auto">
          {skills.map((skill, i) => (
            <SkillCard key={i} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
