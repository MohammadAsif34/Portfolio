import React, { useEffect, useState } from "react";
import { X, CheckCircle, Printer, ZoomIn, ZoomOut } from "lucide-react";

const CertificateView = ({ isOpen, onClose, image, verifyLink }) => {
  const [zoom, setZoom] = useState(1);
  const [filePath, setFilePath] = useState("");

  const isPdf = image.endsWith(".pdf");

  useEffect(() => {
    if (!image) return;

    if (isPdf) {
      const pdfs = import.meta.glob("../../data/certificates/*.pdf", {
        eager: true,
      });
      const path = pdfs[`../../data/certificates/${image}`]?.default;
      setFilePath(path || "");
    } else {
      // For images inside src or public
      setFilePath(
        image.startsWith("/") ? image : `/data/certificates/${image}`
      );
    }
  }, [image]);

  if (!isOpen || !image) return null;

  const handlePrint = () => {
    const printWindow = window.open("/cert.png", "_blank");
    printWindow?.print();
  };

  const handleVerify = () => {
    if (verifyLink) window.open(verifyLink, "_blank");
    else alert("Verification link not available.");
  };

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));

  return (
    <div className="fixed inset-0 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="dark: bg-gray-900 b g-white p-4 rounded-2xl shadow-2xl max-w-5xl w-[95%] relative">
        {/* Certificate Viewer */}
        <div className="flex justify-center items-center overflow-hidden rounded-lg border border-gray-700">
          {!filePath ? (
            <div className="min-h-[80vh] flex justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-thin leading-2 tracking-[10px] text-gray-500 ">
                  Loading
                </span>
                <span className="inline-block w-5 h-5 border-2 border-t-transparent rounded-full animate-spin "></span>
              </div>
            </div>
          ) : isPdf ? (
            <iframe
              src={filePath}
              title="Certificate PDF"
              className="w-full h-[80vh] rounded-lg border-none"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center center",
                transition: "transform 0.2s ease",
              }}
            ></iframe>
          ) : (
            <img
              src={"cert.png"}
              alt="Certificate"
              className="rounded-lg object-contain transition-transform duration-200"
              style={{
                transform: `scale(${zoom})`,
                maxHeight: "80vh",
              }}
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between flex-wrap gap-3 mt-6">
          <div className="flex gap-4">
            {/* <button
              onClick={handleZoomIn}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-semibold transition-all"
            >
              <ZoomIn className="w-4 h-4" /> Zoom In
            </button>

            <button
              onClick={handleZoomOut}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-semibold transition-all"
            >
              <ZoomOut className="w-4 h-4" /> Zoom Out
            </button> */}
          </div>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex items-center gap-2 border border-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded-md font-semibold transition-all"
            >
              Close
            </button>

            <button
              onClick={handleVerify}
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-md font-semibold transition-all"
            >
              <CheckCircle className="w-4 h-4" /> Verify
            </button>

            {/* <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-md font-semibold transition-all"
            >
              <Printer className="w-4 h-4" /> Print
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateView;
