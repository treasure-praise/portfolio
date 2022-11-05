import React from "react";

const Button = ({ text }) => {
  return (
    <a href="#_" class="relative inline-block px-4 py-1 font-medium group">
      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#E2E2E2] border border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span class="absolute inset-0 w-full h-full bg-white border border-black group-hover:bg-black"></span>
      <span class="relative text-black text-xs group-hover:text-white">
        {text}
      </span>
    </a>
  );
};

export default Button;
