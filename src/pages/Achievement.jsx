import SectionTitle from "../components/SectionTitle";
import React from "react";


export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-[#0a0f1c] text-center">
      <SectionTitle title="Achievements" />
      <ul className="space-y-4 text-[#cfcfcf] max-w-2xl mx-auto">
        <li>🏆 Hackathon Winner at XYZ (2024)</li>
        <li>📜 Certified in Python & MERN Stack Development</li>
        <li>🥇 Top 10% performer on LeetCode contests</li>
      </ul>
    </section>
  );
}
