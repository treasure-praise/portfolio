import React from "react";
import {
  FaAt,
  FaGithub,
  FaGithubAlt,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaTwitter,
} from "react-icons/fa";
import { SiFiles } from "react-icons/si";

const Footer = () => {
  return (
    <div className="border-black border-t-2 h-full flex items-center justify-between px-4 md:px-16  ">
      <div className="flex flex-col md:flex-row my-4">
        <a
          target="__blank"
          href="https://drive.google.com/file/d/1ypBVJO3hMeixHS9LZvEQMvN5HNn5OLLm/view?usp=sharing"
          className="mr-4 flex gap-2 items-center"
        >
          Resume
          <SiFiles />
        </a>

        <a
          target="__blank"
          href="mailto: thetreasureolatunbosun@gmail.com"
          className="mr-4 flex gap-2 items-center"
        >
          Email <FaAt />
        </a>
      </div>
      <div className="flex flex-col md:flex-row my-4">
        <a
          target="__blank"
          href="https://twitter.com/_futuretreasure"
          className="mr-4 flex gap-2 items-center"
        >
          Twitter <FaTwitter />
        </a>
        <a
          target="__blank"
          href="https://github.com/treasure-praise"
          className="mr-4 flex gap-2 items-center"
        >
          Github
          <FaGithub />
        </a>
        <a
          target="__blank"
          href="https://www.linkedin.com/in/treasurepraiseolatunbosun/"
          className="flex gap-2 items-center"
        >
          LinkedIn
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
