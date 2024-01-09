import React from "react";
import { FaExpandArrowsAlt, FaFilePdf } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <div className="border-b-2 border-black flex justify-between items-center p-2">
      <p className="flex items-center">
        <FaExpandArrowsAlt />
        TheTruthAboutTreasure
      </p>
      <button className="md:hidden">
        {/* <HiMenuAlt1 /> */}
        <a
          target="__blank"
          href="https://docs.google.com/document/d/156SCeKK36oijK0AUm3kzXcKh5QCLb9r6t9ocJNvtuw8/edit?usp=share_link"
          className="mr-4 flex gap-2 items-center"
        >
          Resume
          <FaFilePdf />
        </a>
      </button>
      <nav className="hidden md:flex ">
        <ul className="md:flex ">
          <a
            target="__blank"
            href="https://drive.google.com/file/d/1ypBVJO3hMeixHS9LZvEQMvN5HNn5OLLm/view?usp=sharing"
            className="mr-4 flex gap-2 items-center"
          >
            Resume
            <FaFilePdf />
          </a>
          {/* <li className="">About</li> */}
          {/* <li>Projects</li>
          <li>Contacts</li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
