import React from "react";
import Button from "./Button";
import { IoMdGitBranch, IoMdEye } from "react-icons/io";

const Projects = () => {
  return (
    <div>
      <h1 className="text-center   my-4 text-lg font-bold">Projects</h1>
      <div className=" md:grid px-8 md:px-0 md:grid-cols-3 grid-cols-1 gap-12 md:w-4/5 mx-auto ">
        <div className="rounded-md  mx-auto h-48 p-1 mb-8  bg-gradient-to-r from-[#FF000F] via-[#DCE017] to-[#14A481]">
          <div className="h-full rounded-sm p-4 bg-white">
            <h1 className="mb-3 font-semibold">👩‍🌾ThriveGithubFinder</h1>
            <div className="flex gap-2 mb-4">
              <Button text={"React"} />
              <Button text={"TailwindCss"} />
              {/* <Button text={"React Testing Library"} /> */}
              <Button text={"Storybook"} />
            </div>
            <p className="text-gray">
              Search Github Profiles direclty from Github API{" "}
            </p>
            <div className="flex gap-4 mb-4">
              <a
                target="__blank"
                href="https://thrivegithubfinder.netlify.app"
                className="flex items-center gap-2"
              >
                <p>Live</p>
                <IoMdEye />
              </a>
              <a
                target="__blank"
                href="https:github.com/treasure-praise/thrive-assesment-test"
                className="flex items-center gap-2"
              >
                <p>Code</p>
                <IoMdGitBranch />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-md  mx-auto h-48 p-1 mb-8  bg-gradient-to-r from-[#FF000F] via-[#DCE017] to-[#14A481]">
          <div className="h-full rounded-sm p-4 bg-white">
            <h1 className="mb-3 font-semibold">📨 DevAsk</h1>
            <div className="flex gap-2 mb-4">
              <Button text={"React"} />
              <Button text={"TailwindCss"} />
              <Button text={"Redux"} />
            </div>
            <p className="text-gray">
              Get rewarded for providing solutions to questions
              {/* Devask helps you get answers to your technical questions
              immediately. You also get rewarded when you provide correct
              answers to questions. */}
            </p>
            <div className="flex gap-4 mb-4">
              <a
                target="__blank"
                href="https://devask-mallet.netlify.app/wallet"
                className="flex items-center gap-2"
              >
                <p>Live</p>
                <IoMdEye />
              </a>
              <a
                target="__blank"
                href="https://github.com/workshopapps/twitterdevanswers.web/pull/71"
                className="flex items-center gap-2"
              >
                <p>Code</p>
                <IoMdGitBranch />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-md mx-auto h-48 p-1 mb-8  bg-gradient-to-r from-[#FF000F] via-[#DCE017] to-[#14A481]">
          <div className="h-full rounded-sm p-4 bg-white">
            <h1 className="mb-3 font-semibold">🦄 MetaBnB</h1>
            <div className="flex gap-2 mb-4">
              <Button text={"React"} />
              <Button text={"TailwindCss"} />
              <Button text={"ContextApi"} />
            </div>
            <p className="text-gray">
              Rent a Place away from Home in the Decentraland
            </p>
            <div className="flex gap-4 mb-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://metabnbdev.netlify.app"
                className="flex items-center gap-2"
              >
                <p>Live</p>
                <IoMdEye />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/treasure-praise/MetaBnB"
                className="flex items-center gap-2"
              >
                <p>Code</p>
                <IoMdGitBranch />
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-md  mx-auto h-48 p-1 mb-8  bg-gradient-to-r from-[#FF000F] via-[#DCE017] to-[#14A481]">
          <div className="h-full rounded-sm p-4 bg-white">
            <h1 className="mb-3 font-semibold">
              👨🏽‍💻 Spectrum Micro Finance Bank
            </h1>
            <div className="flex gap-2 mb-4">
              <Button text={"Vue"} />
              <Button text={"TailwindCss"} />
            </div>
            <p className="text-gray">
              Spectrum MFB gives access to business loans with flexible
              repayment plans at competitive interest rates.
            </p>
            {/* <div className="flex gap-4 mb-4">
              <a target="__blank" href="" className="flex items-center gap-2">
                <p>Live</p>
                <IoMdEye />
              </a>
              <a target="__blank" href="" className="flex items-center gap-2">
                <p>Code</p>
                <IoMdGitBranch />
              </a>
            </div> */}
          </div>
        </div>

        <div className="rounded-md  mx-auto h-48 p-1 mb-8  bg-gradient-to-r from-[#FF000F] via-[#DCE017] to-[#14A481]">
          <div className="h-full rounded-sm p-4 bg-white">
            <h1 className="mb-3 font-semibold">👨🏽‍💻 Powerquick</h1>
            <div className="flex gap-2 mb-4">
              <Button text={"React"} />
              <Button text={"Redux"} />
              <Button text={"Css"} />
            </div>
            <p className="text-gray">
              A utility application that allows you to easily pay for elctricity
            </p>
            {/* <div className="flex gap-4 mb-4">
              <a target="__blank" href="" className="flex items-center gap-2">
                <p>Live</p>
                <IoMdEye />
              </a>
              <a target="__blank" href="" className="flex items-center gap-2">
                <p>Code</p>
                <IoMdGitBranch />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
