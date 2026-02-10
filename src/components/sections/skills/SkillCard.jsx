import { motion } from "framer-motion";
import React from "react";

export default function SkillCard({ icon, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="h- flex justify-center items-center gap-3 p-4  rounded-md bg-gray-900 backdrop-blur border border-[#6c63ff]/20 shado w-[0_0_10px_#6c63ff]"
    >
      <img src={icon} alt={name} className="w-6 h-6" />
      <p className="text-white text-center">{name}</p>
    </motion.div>
  );
}
