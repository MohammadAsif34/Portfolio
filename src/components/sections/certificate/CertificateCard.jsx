import { Award } from "lucide-react";
import React, { useState } from "react";
import CertificateView from "../../modal/CertificateView";

export default function CertificateCard({ title, issuer, date, link }) {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div className="b g-white dark: bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-indigo-500 w-8" />
            <h3 className="text-lg font-semibold t ext-gray-800 dark:text-gray-100">
              {title}
            </h3>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-400 mb-2">
            <span className="font-medium">Issued by:</span> {issuer}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
            Date: {date}
          </p>
          {link && (
            <button
              onClick={() => setOpen(true)}
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
            >
              View Certificate
            </button>
          )}
        </div>
      </div>
      <CertificateView
        isOpen={open}
        onClose={() => setOpen(false)}
        image={link}
      />
    </>
  );
}
