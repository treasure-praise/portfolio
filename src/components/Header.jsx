import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <div className="border-b-2 border-black flex justify-between items-center p-2">
      <p>TheTruthAboutTreasure</p>
      <button className="md:hidden">
        <HiMenuAlt1 />
      </button>
      <nav className="hidden md:flex ">
        <ul className="md:flex ">
          <li className="">About</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
