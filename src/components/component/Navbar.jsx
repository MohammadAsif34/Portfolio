import { motion } from "framer-motion";
import { Code2, Download, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import CertificateView from "../modal/CertificateView";
import { navlink, socialLink } from "../../data/my_dataset";
import { Link } from "react-router-dom";

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
          <Link to={"/"} className="flex items-center justify-center gap-4">
            {/* <img
              src="./logo.png"
              alt=""
              className="w-8 h-8  object-cover scale-200"
            /> */}
            <Code2 size={40} />
            {/* <h1 className="text-xl font-serif uppercase tracking-wider font- text- transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#ff00ff]">
              Mohammad Asif
              </h1> */}
            <img
              src="/signature.png"
              className="w-40 md:55 px-4 pobject-contain scale-120"
              alt=""
            />
          </Link>

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
          <div className="relativ e">
            <button
              onClick={() => setOpen(true)}
              className="  hidden md:flex items-center px-4 bg-indigo-500 py-1 rounded cursor-pointer hover:scale-105 transition duration-300 ease-in-out text-white"
            >
              Resume
              {/* <Download className="sm:p-1 inline-block" /> */}
            </button>
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenu((p) => !p)}
            >
              <i className="bi bi-list"></i>
            </button>
            {menu && (
              <div
                className={`absolute top-0 right-0 ${
                  menu ? "w-[275px]" : "w-0"
                } h-screen bg-gray-900 transition-transform duration-500`}
              >
                <div className="p-2">
                  <button onClick={() => setMenu(false)}>
                    <X className="cursor-pointer" />
                  </button>
                </div>
                <div className=" w-full h- p-6">
                  <ul className="flex flex-col gap-6  text-[#cfcfcf] text- md:text-sm md:gap-5 md:font-normal ">
                    {navlink.map((it) => (
                      <motion.li key={it.to} whileHover={{ scale: 1.1 }}>
                        <a
                          href={it.to}
                          onClick={() => setMenu(false)}
                          className="hover:text-purple-400 text-lg px-4 transition-all duration-500"
                        >
                          {it.label}
                        </a>
                      </motion.li>
                    ))}
                    {/* <Button title="Download CV" className="py-1!" /> */}
                  </ul>
                  <div className="py-6">
                    <button
                      onClick={() => setOpen(true)}
                      className=" flex items-center px-4 bg-indigo-500 py-1 rounded cursor-pointer hover:scale-105 transition duration-300 ease-in-out text-white"
                    >
                      Resume
                      {/* <Download className="sm:p-1 inline-block" /> */}
                    </button>
                  </div>
                  {/* Social Links */}
                  <div className=" flex md:block flex-col items-center mt-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <div className=" py-4 flex gap-x-5">
                        {socialLink?.map((social, idx) => (
                          <a
                            target="_blank"
                            href={social.link}
                            key={social.id || idx}
                            className=" cursor-pointer hover:text-indigo-600"
                            title={social.title}
                          >
                            {social?.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>{" "}
                  <p className="py-2 text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} Mohammad Asif <br />All rights
                    reserved.
                  </p>
                </div>
              </div>
            )}
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
