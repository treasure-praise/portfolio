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

const Footer = () => {
  return (
    <div className="border-black border-t-2 h-full flex items-center justify-between px-4 md:px-16  ">
      <div className="flex flex-col md:flex-row my-4">
        <a href="" className="mr-4 flex gap-2 items-center">
          Home
          <FaHome />
        </a>
        <a href="" className="mr-4 gap-2">
          About
        </a>
        <a href="" className="mr-4 flex gap-2 items-center">
          Email <FaAt />
        </a>
      </div>
      <div className="flex flex-col md:flex-row my-4">
        <a href="" className="mr-4 flex gap-2 items-center">
          Twitter <FaTwitter />
        </a>
        <a href="" className="mr-4 flex gap-2 items-center">
          Github
          <FaGithub />
        </a>
        <a href="" className="flex gap-2 items-center">
          LinkdIn
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
