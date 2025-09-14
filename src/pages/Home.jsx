import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center bg-[#0a0f1c] text-white relative"
      >
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f5d4]/20 via-[#6c63ff]/20 to-[#ff00ff]/20 blur-3xl"></div>

        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#ff00ff]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mohammad Asif
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-2xl text-[#cfcfcf]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          MERN Stack Developer | Python Developer | Problem Solver
        </motion.p>

        <motion.div
          className="mt-6 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold border border-[#00f5d4] text-[#00f5d4] hover:bg-[#00f5d4] hover:text-black transition shadow-[0_0_15px_#00f5d4]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold border border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black transition shadow-[0_0_15px_#ff00ff]"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
