import React from "react";

export default function SectionTitle({ title }) {
  return (
    <h2 className="text-3xl md:text-4xl xl:text-5xl py-1 font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500  to-purple-600 drop-shadow-lg">
      {title}
    </h2>
  );
}
