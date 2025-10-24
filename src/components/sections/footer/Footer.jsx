import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { about, quickLink, socialLink } from "../../../data/my_dataset";
import { Link } from "react-router-dom";

export default function Footer() {
  // const [about, setAbout] = useState(about);
  return (
    <footer className=" bg-gray-900  ">
      <div className=" padding mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8 py-10 ">
        {/* Brand / About */}
        <div className="px-6 sm:text-center md:text-balance ">
          <h2 className="text-3xl font-bold font-serif text-white mb-3">
            Mohammad Asif
          </h2>
          <p className="text-sm leading-6 px-4  line-clamp-5">{about}</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center ">
          <h3 className="text-2xl font-bold text-white mb-3">Quick Links</h3>
          <div className="flex flex-col">
            {quickLink.map((quick, idx) => (
              <a
                href={quick.to}
                key={quick.id || idx}
                title={quick.label}
                className="my-0.5 py-1"
              >
                {quick.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex md:block flex-col items-center ">
          <h3 className="text-2xl font-bold text-white mb-3">Contact</h3>
          <ul className="space-y-2 flex flex-col text-gray-400">
            <li className=" text-center md:text-start">
              <strong className="block text-white md:inline">Email: </strong>
              <a
                href="mailto:mohammadasif34.dev@gmail.com"
                className="hover:text-white"
              >
                mohammadasif34.dev@gmail.com
              </a>
            </li>
            <li className=" text-center md:text-start">
              <strong className="block text-white md:inline">Phone: </strong>
              <a href="tel:7250761747">+91 7250761747</a>
            </li>
            <li className=" text-center md:text-start">
              <strong className="block text-white md:inline">Location: </strong>
              Kolkata, India
            </li>
          </ul>

          {/* Social Links */}
          <div className=" flex md:block flex-col items-center mt-6">
            <h3 className="text-2xl font-bold text-white mb-3">Follow Us</h3>
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="padding py-4 bg-gray-950 border-t border-gray-700  text-center text-sm md:flex justify-between items-center">
        <p className="py-2">
          © {new Date().getFullYear()} Mohammad Asif — All rights reserved.
        </p>
        <p className="py-2 text-indigo-500 font-bold italic">{`"Building Cool Thing with Code"`}</p>
        <p className="py-2">
          Developed with <span className="text-red-500">♥</span> by : Mohammad
          Asif
        </p>
      </div>
    </footer>
  );
}
