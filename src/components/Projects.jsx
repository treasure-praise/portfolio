import React from "react";
import Button from "./Button";
import { IoMdGitBranch, IoMdEye } from "react-icons/io";

const Projects = () => {
  return (
    <div>
      <h1 className="md:text-center pl-12 mb-4 text-lg font-bold">Projects</h1>
      <div className=" md:flex gap-12 md:w-4/5 mx-auto ">
        <div className="rounded-md w-4/5 md:w-1/4 mx-auto h-48 p-1 mb-8  bg-gradient-to-r from-[#FF000F] via-[#DCE017] to-[#14A481]">
          <div className="h-full rounded-sm p-4 bg-white">
            <h1 className="mb-3">👨🏽‍💻 Powerkwik</h1>
            <div className="flex gap-2 mb-4">
              <Button text={"React"} />
              <Button text={"TailwindCss"} />
              <Button text={"Redux"} />
            </div>
            <p className="text-gray">
              A utility application that allows you to easily pay for elctricity
            </p>
            <div className="flex gap-4 mb-4">
              <a href="" className="flex items-center gap-2">
                <p>Live</p>
                <IoMdEye />
              </a>
              <a href="" className="flex items-center gap-2">
                <p>Code</p>
                <IoMdGitBranch />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-md w-4/5 md:w-1/4 mx-auto h-48 p-1 mb-8  bg-gradient-to-r from-[#FF000F] via-[#DCE017] to-[#14A481]">
          <div className="h-full rounded-sm p-4 bg-white">
            <h1 className="mb-3">👨🏽‍💻 Powerkwik</h1>
            <div className="flex gap-2 mb-4">
              <Button text={"React"} />
              <Button text={"TailwindCss"} />
              <Button text={"Redux"} />
            </div>
            <p className="text-gray">
              A utility application that allows you to easily pay for elctricity
            </p>
            <div className="flex gap-4 mb-4">
              <a href="" className="flex items-center gap-2">
                <p>Live</p>
                <IoMdEye />
              </a>
              <a href="" className="flex items-center gap-2">
                <p>Code</p>
                <IoMdGitBranch />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-md w-4/5 md:w-1/4 mx-auto h-48 p-1 mb-8  bg-gradient-to-r from-[#FF000F] via-[#DCE017] to-[#14A481]">
          <div className="h-full rounded-sm p-4 bg-white">
            <h1 className="mb-3">👨🏽‍💻 Powerkwik</h1>
            <div className="flex gap-2 mb-4">
              <Button text={"React"} />
              <Button text={"TailwindCss"} />
              <Button text={"Redux"} />
            </div>
            <p className="text-gray">
              A utility application that allows you to easily pay for elctricity
            </p>
            <div className="flex gap-4 mb-4">
              <a href="" className="flex items-center gap-2">
                <p>Live</p>
                <IoMdEye />
              </a>
              <a href="" className="flex items-center gap-2">
                <p>Code</p>
                <IoMdGitBranch />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-md w-4/5 md:w-1/4 mx-auto h-48 p-1 mb-8  bg-gradient-to-r from-[#FF000F] via-[#DCE017] to-[#14A481]">
          <div className="h-full rounded-sm p-4 bg-white">
            <h1 className="mb-3">👨🏽‍💻 Powerkwik</h1>
            <div className="flex gap-2 mb-4">
              <Button text={"React"} />
              <Button text={"TailwindCss"} />
              <Button text={"Redux"} />
            </div>
            <p className="text-gray">
              A utility application that allows you to easily pay for elctricity
            </p>
            <div className="flex gap-4 mb-4">
              <a href="" className="flex items-center gap-2">
                <p>Live</p>
                <IoMdEye />
              </a>
              <a href="" className="flex items-center gap-2">
                <p>Code</p>
                <IoMdGitBranch />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
