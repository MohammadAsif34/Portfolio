import { motion } from "framer-motion";
import React from "react";


export default function ProjectCard({ title, desc, tech, link, github }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-[#00f5d4]/40 shadow-[0_0_15px_#00f5d4]"
    >
      <h3 className="text-2xl font-bold text-[#00f5d4]">{title}</h3>
      <p className="mt-2 text-[#cfcfcf]">{desc}</p>
      <p className="mt-3 text-sm text-[#ff00ff]">Tech: {tech}</p>
      <div className="mt-4 flex gap-4">
        {link && (
          <a
            href={link}
            target="_blank"
            className="text-[#00f5d4] hover:underline"
          >
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            className="text-[#ff00ff] hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
