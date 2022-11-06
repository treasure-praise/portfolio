import React from "react";
import {
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
    <div className="border-black border-t-2 h-full flex items-center justify-between px-4 md:px-16 ">
      <div className="flex flex-col my-4">
        <a href="" className="mr-4">
          Home
          <FaHome />
        </a>
        <a href="" className="mr-4">
          About
        </a>
        <a href="" className="mr-4 flex items-center">
          Email <FaMailBulk />
        </a>
      </div>
      <div className="flex flex-col my-4">
        <a href="" className="mr-4 flex items-center">
          Twitter <FaTwitter />
        </a>
        <a href="" className="mr-4 flex items-center">
          Github
          <FaGithub />
        </a>
        <a href="" className="flex items-center">
          LinkdIn
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
