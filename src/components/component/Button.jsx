import React from "react";

const Button = ({ title, type, onclick, className }) => {
  return (
    <button
      type={type}
      className={`px-6 py-2 text-white rounded-lg bg-gradient-to-tr from-indigo-500  to-purple-600 hover:to-indigo-500  hover:from-purple-600 transition-all duration-00 ease-in-out cursor-pointer ${className}`}
      onClick={() => onclick()}
    >
      {title}
    </button>
  );
};

export default Button;
