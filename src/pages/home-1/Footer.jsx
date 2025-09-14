import React from "react";

export default function Footer() {
  return (
    <footer className=" py-4 px-[8%] text-center text-xs bg-gray-900 text-neutral-400 flex  md:justify-between max-md:flex-col gap-4" >
      <p>© {new Date().getFullYear()} Mohammad Asif | All Rights Reserved.</p>
      <p className=" text-[#00f5d4]">“Code. Solve. Create.”</p>
      <p className=" ">
        Made with <span className="text-red-500">♥</span> by : Mohammad Asif
      </p>
    </footer>
  );
}
