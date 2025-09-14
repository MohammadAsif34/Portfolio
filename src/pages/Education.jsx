import SectionTitle from "../components/SectionTitle";
import React from "react";


export default function Education() {
  return (
    <section id="education" className="py-20 px-6 text-white">
      <SectionTitle title="Education" />
      <div className="max-w-3xl mx-auto space-y-6 text-[#cfcfcf]">
        <div className="p-6 bg-white/5 rounded-lg border border-[#00f5d4]/40">
          <h3 className="text-xl font-bold text-[#00f5d4]">
            B.Tech in Computer Science
          </h3>
          <p>Aliah University | 2021 - 2025</p>
          <p className="text-sm mt-2">
            Relevant Coursework: DSA, DBMS, OS, CN, Web Development
          </p>
        </div>
      </div>
    </section>
  );
}
