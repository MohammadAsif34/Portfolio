import React, { useEffect, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const ReadmeViewer = ({ isOpen, onClose, repoUrl }) => {
  const [zoom, setZoom] = useState(1);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen || !repoUrl) return;

    const fetchReadme = async () => {
      setLoading(true);

      try {
        // Convert repo URL → RAW README.md
        // Example: https://github.com/user/repo → https://raw.githubusercontent.com/user/repo/main/README.md
        const rawUrl = repoUrl
          .replace("https://github.com/", "https://raw.githubusercontent.com/")
          .concat("/main/README.md");

        const res = await fetch(rawUrl);
        const text = await res.text();
        setContent(text);
      } catch (err) {
        setContent("❌ Failed to load README.md");
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [repoUrl, isOpen]);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 2));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 0.5));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 p-5 rounded-2xl shadow-xl max-w-5xl w-[95%] max-h-[90vh] overflow-hidden relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-semibold">README Viewer</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white transition"
          >
            <X size={26} />
          </button>
        </div>

        {/* Viewer */}
        <div
          className="rounded-lg p-5 overflow-auto border border-gray-700 bg-gray-800"
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: "top left",
            height: "70vh",
            transition: "transform 0.2s ease",
          }}
        >
          {loading ? (
            <div className="text-gray-400 text-center py-20">
              Loading README...
            </div>
          ) : (
            <ReactMarkdown
              className="prose prose-invert max-w-none"
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {content}
            </ReactMarkdown>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={zoomIn}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition"
          >
            <ZoomIn size={18} /> Zoom In
          </button>

          <button
            onClick={zoomOut}
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition"
          >
            <ZoomOut size={18} /> Zoom Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadmeViewer;
