import React, { useEffect, useState } from "react";
import {
  X,
  CheckCircle,
  Printer,
  ZoomIn,
  ZoomOut,
  ExternalLink,
} from "lucide-react";

const Documentations = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="dark: bg-gray-900 b g-white p-4 rounded-2xl shadow-2xl max-w-5xl w-[95%] relative">
        {/* Certificate Viewer */}
        <div className="h-[80vh]flex justify-center items-center overflow-hidden rounded-lg border border-gray-700">
          {false ? (
            <div className="h-full flex justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-thin leading-2 tracking-[10px] text-gray-500 ">
                  Loading
                </span>
                <span className="inline-block w-5 h-5 border-2 border-t-transparent rounded-full animate-spin "></span>
              </div>
            </div>
          ) : (
            <div className="w-full min-h-72 flex flex-col justify-center items-center">
              <p>Something went wrong!!</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between flex-wrap gap-3 mt-6">
          <div className="flex gap-4"></div>
          <div className="flex gap-4">
            <button
              onClick={() => onClose(!isOpen)}
              className="flex items-center gap-2 border border-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-md font-semibold transition-all cursor-pointer"
            >
              Close
            </button>

            <button
              // onClick={handleVerify}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-md font-semibold transition-all cursor-not-allowed"
            >
              GitHub
            </button>
            <button
              // onClick={handleVerify}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-md font-semibold transition-all cursor-no-drop"
            >
              Live Preview
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentations;
