import React from "react";
// import Avatar from "../assets/avatar.svg";
import HeroImg from "../assets/canva2.png";

const HeroSection = () => {
  return (
    <div className="md:flex md:flex-row-reverse  mb-12 items-center justify-between flex-col px-8 md:w-4/5 mx-auto">
      {/* <img src={Avatar} alt="" srcset="" className="h-48 md:h-full my-8" /> */}
      <img src={HeroImg} alt="" srcset="" className="md:h-96 my-8" />
      <div className="">
        <h1 className="text-4xl md:text-5xl mb-2 lg:text-left text-center ">
          Olatunbosun <br /> Treasure-Praise
        </h1>
        <p className="text-3xl font-light text-justify lg:w-4/5">
          Junior Software Engineer trying to build a career{" "}
          <a
            target="__blank"
            className="text-[#FFC900]"
            href="https://www.swyx.io/api-economy"
          >
            above the API 🔗
          </a>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
