import { motion } from "framer-motion";
import React from "react";

export default function SkillCard({ icon, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-[#6c63ff]/40 shadow-[0_0_10px_#6c63ff]"
    >
      <img src={icon} alt={name} className="w-12 h-12" />
      <p className="text-white">{name}</p>
    </motion.div>
  );
}
