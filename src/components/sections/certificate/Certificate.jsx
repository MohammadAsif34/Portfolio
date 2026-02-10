import React, { useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import CertificateCard from "./CertificateCard";
import { certificates } from "../../../data/my_dataset";
import Button from "../../component/Button";

export default function Certificate() {
  const [size, setSize] = useState(6);

  const handlemore = () => {
    if (size < certificates.length) setSize((p) => p + 4);
    else setSize(6);
  };

  return (
    <section id="certificates" className="px-0 py-14 scroll-mt-10">
      <div className="">
        <SectionTitle title="Certificates" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
          {certificates.slice(0, size).map((cert, i) => (
            <CertificateCard key={i} {...cert} />
          ))}
        </div>
        <div className="py-10 text-center">
          {certificates.length > 6 && (
            <Button
              title={size + 4 > certificates.length ? "See less" : "See more"}
              onclick={handlemore}
            />
          )}
        </div>
      </div>
    </section>
  );
}
