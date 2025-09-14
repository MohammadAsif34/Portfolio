import React from "react";

export default function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#ff00ff] drop-shadow-lg">
      {title}
    </h2>
  );
}
