import { motion } from "framer-motion";
import { Download } from "lucide-react";
import React, { useEffect, useState } from "react";
import CertificateView from "../modal/CertificateView";
import { navlink } from "../../data/my_dataset";

export default function Navbar() {
  const [isNav, setIsNav] = useState(false);
  const [open, setOpen] = useState(null);

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
        className={`fixed top-0 left-0 w-full z-30  ${
          isNav ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
        } transition-all duration-1000 ease-in-out`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* logo  */}
          <div className="flex items-center justify-center gap-4">
            <img
              src="./logo.png"
              alt=""
              className="w-8 h-8  object-cover scale-200"
            />
            {/* <Code2 size={40}/> */}
            {/* <h1 className="text-xl font-serif uppercase tracking-wider font- text- transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#ff00ff]">
              Mohammad Asif
              </h1> */}
            <img
              src="/signature.png"
              className="w-40 md:55 px-4 pobject-contain scale-120"
              alt=""
            />
          </div>

          {/* nav item  */}
          <ul className="hidden md:flex gap-3 items-center text-[#cfcfcf] text-sm md:text-sm md:gap-5 md:font-normal ">
            {navlink.map((it) => (
              <motion.li key={it.to} whileHover={{ scale: 1.1 }}>
                <a
                  href={it.to}
                  className="hover:text-purple-400 transition-all duration-500"
                >
                  {it.label}
                </a>
              </motion.li>
            ))}
            {/* <Button title="Download CV" className="py-1!" /> */}
          </ul>
          <div className="relative">
            <button
              onClick={() => setOpen(true)}
              className="flex  items-center px-3 bg-indigo-500 py-1 rounded-lg text-white"
            >
              Resume
              <Download className="sm:p-1 inline-block" />
            </button>
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenu((p) => !p)}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
        {/* <div className={`w-full ${menu ? "block" : "hidden"} bg-gray-900`}>
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
        </div> */}
      </nav>
      <CertificateView
        image={"mohammadasif_resume.pdf"}
        key={"resume"}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
