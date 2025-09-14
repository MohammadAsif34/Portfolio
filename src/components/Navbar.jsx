import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const items = [
    { to: "/#", label: "Home" },
    { to: "#about", label: "About" },
    { to: "#education", label: "Education" },
    { to: "#projects", label: "Projects" },
    { to: "#skills", label: "Skills" },
    // { to: "/problemsolving", label: "ProblemSolving" },
    // { to: "/education", label: "Education" },
    // { to: "/achievements", label: "Achievements" },
    { to: "#contact", label: "Contact" },
  ];

  const [isNav, setIsNav] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNav(true);
      } else {
        setIsNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // ✅ fixed
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50  ${
          isNav ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
        } transition-all duration-1000 ease-in-out`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center justify-center gap-4">
            <img src="./logo.svg" alt="" className="w-20 h-10" />
            <h1 className="text-xl font-serif uppercase tracking-wider font- text- transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#ff00ff]">
              Mohammad Asif
            </h1>
          </div>

          <ul className="flex gap-10 text-[#cfcfcf] max-md:hidden">
            {items.map((it) => (
              <motion.li key={it.to} whileHover={{ scale: 1.1 }}>
                <a
                  href={it.to}
                  className="hover:text-purple-400 transition-all duration-500"
                >
                  {it.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenu((p) => !p)}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
        <div className={`w-full ${menu ? "block" : "hidden"} bg-gray-900`}>
          <ul className=" px-4 py-2 flex gap-10 text-[#cfcfcf] md:hidden overflow-x-auto scroll-my-2 scroll-none">
            {items.map((it) => (
              <motion.li key={it.to} whileHover={{ scale: 1.1 }}>
                <a
                  href={it.to}
                  className=" hover:text-purple-400 transition-all duration-500"
                >
                  {it.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
