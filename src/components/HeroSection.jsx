import React from "react";
import Avatar from "../assets/avatar.svg";

const HeroSection = () => {
  return (
    <div className="md:flex md:flex-row-reverse items-center justify-between flex-col px-8 md:w-4/5 mx-auto">
      <img src={Avatar} alt="" srcset="" className="h-48 md:h-full my-8" />
      <div>
        <h1 className="text-5xl mb-2">Olatunbosun Treasure-Praise</h1>
        <p className="text-3xl font-light">
          Junior Software Engineer trying <br />
          to build a career
          <span className="text-[#FFC900]"> above the API</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
