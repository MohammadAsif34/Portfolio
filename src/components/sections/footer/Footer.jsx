import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MailIcon,
  Phone,
  MapPin,
  MapPinned,
} from "lucide-react";
import { quickLink, socialLink } from "../../../data/my_dataset";

export default function Footer() {
  return (
    <footer className=" bg-gray-900  ">
      <div className=" padding mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 py-10 transition-transform duration-300 ease-in-out ">
        {/* Contact Info */}
        <div className="col-span-2 flex md :block flex-col justify-center items-center ">
          <h2 className="text-xl md:text-3xl xl:text-4xl py-1 tracking-wider font-bold text-center my-6 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500  to-purple-600 drop-shadow-lg">
            Contact Information
          </h2>

          <ul className="space-y-2 flex flex-col  text-gray-400">
            <li className="py-2 text-lg text-center md:text-start text-white">
              <MailIcon size={24} className="inline-block mr-6" />
              <span className="block text-gray-600 md:inline">Email: </span>
              <a
                href="mailto:mohammadasif34.dev@gmail.com"
                className="hover:text-white font-semibold"
              >
                mohammadasif34.dev@gmail.com
              </a>
            </li>

            <li className="py-2 text-center md:text-start text-white">
              <MapPinned size={24} className="inline-block mr-6" />
              <span className="block text-gray-600 md:inline">Location:</span>
              <span className="font-semibold">Kolkata, West Bengal, India</span>
            </li>
          </ul>

          {/* Social Links */}
          <div className=" flex md:block flex-col items-center mt-6">
            <h2 className="text-xl md:text-3xl xl:text-4xl py-1 tracking-wider font-bold text-center my-6 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500  to-purple-600 drop-shadow-lg">
              Follow Us
            </h2>
            <div className=" flex gap-x-5 justify-center">
              {socialLink?.map((social, idx) => (
                <a
                  target="_blank"
                  href={social.link}
                  key={social.id || idx}
                  className=" cursor-pointer hover:text-indigo-600 p-2 hover:bg-gray-800 rounded-md"
                  title={social.title}
                >
                  {social?.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center ">
          <h2 className="text-xl md:text-3xl xl:text-4xl py-1 tracking-wider font-bold text-center my-6 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500  to-purple-600 drop-shadow-lg">
            Quick Links
          </h2>
          <div className="flex flex-col">
            {quickLink.map((quick, idx) => (
              <a
                href={quick.to}
                key={quick.id || idx}
                title={quick.label}
                className="my-0.5 py-1 hover:text-indigo-500"
              >
                {quick.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="padding py-3 text-gray-500 bg-gray-950 text-center text-sm md:flex justify-between items-center">
        <p className="py-2">
          © {new Date().getFullYear()} | Mohammad Asif — All rights reserved.
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
