import React from "react";
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaNodeJs,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { SiJest } from "react-icons/si";

const SkillsSection = () => {
  return (
    <>
      <h2 className="text-center text-lg font-bold mb-4">Skills</h2>
      <div class="mb-8 w-full md:w-4/5 flex mx-auto overflow-auto whitespace-no-wrap py-3 px-4 h-16 text-center">
        <p class="relative inline-block px-4 py-2 font-medium group mr-4">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p>React</p>
            <FaReact />
          </span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p>Vue</p>
            <FaVuejs />
          </span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p>HTML</p>
            <FaHtml5 />
          </span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black">TailwindCSS</span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p>Git</p>
            <FaGithub />
          </span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p> Node.Js</p>
            <FaNodeJs />
          </span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p>Figma</p>
            <FaFigma />
          </span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4 ">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p>ReactTestingLibrary</p>
            <SiJest />
          </span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4 ">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p>ReactTestingLibrary</p>
            <SiJest />
          </span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4 ">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p>Redux</p>
            <SiJest />
          </span>
        </p>

        <p class="relative inline-block px-4 py-2 font-medium group mr-4 ">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black "></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black "></span>
          <span class="relative text-black flex items-center">
            <p>JavaScript</p>
            <SiJest />
          </span>
        </p>
      </div>
    </>
  );
};

export default SkillsSection;
