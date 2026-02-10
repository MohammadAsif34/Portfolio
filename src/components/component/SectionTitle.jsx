import React from "react";

export default function SectionTitle({ title }) {
  return (
    <h2 className="text-2xl md:text-4xl xl:text-5xl py-1 tracking-wider font-bold uppercase text-center my-6 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500  to-purple-600 drop-shadow-lg">
      {title}
    </h2>
  );
}
