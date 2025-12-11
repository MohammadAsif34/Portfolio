import React, { useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import CertificateCard from "./CertificateCard";
import { certificates } from "../../../data/my_dataset";

export default function Certificate() {
  const [size, setSize] = useState(8);

  const handlemore = () => {
    if (size < certificates.length) setSize((p) => p + 4);
    else setSize(8);
  };

  return (
    <section id="certificates" className="py-14 scroll-mt-10">
      <div className="">
        <SectionTitle title="Certificates" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:g rid-cols-3 lg:grid-cols-4 gap-4  mx-auto">
          {certificates.slice(0, size).map((cert, i) => (
            <CertificateCard key={i} {...cert} />
          ))}
        </div>
        <div className="py-10 text-center">
          {certificates.length > 8 && (
            <button
              onClick={handlemore}
              className="px-4 py-2 border rounded-xl cursor-pointer hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-300 ease-in-out "
            >
              {size + 4 > certificates.length ? "See less" : "See more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

// <section id="certificates" className="py-16 bg-gray-50 dark:bg-gray-950">
//   <div className="max-w-6xl mx-auto px-6">
//     <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
//       Certificates & Achievements
//     </h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {certificates.map((cert, index) => (
//         <CertificateCard key={index} {...cert} />
//       ))}
//     </div>
//   </div>
// </section>
