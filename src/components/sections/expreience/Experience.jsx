import React from "react";
import { Briefcase, Award, Code, Rocket, ExternalLink } from "lucide-react";
import SectionTitle from "../../component/SectionTitle.jsx";
import ExperienceCard from "./ExperianceCard.jsx";

import { experiences } from "../../../data/my_dataset.jsx";

export default function Experience() {
  return (
    <section id="experience" className="py-14 scroll-mt-10">
      <div className=" mx-auto ">
        <SectionTitle title="Experience/ Interships" />

        <div className="grid sm:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
