import React from "react";
import Coding from "../assets/code.svg";
import { MdOutlineArrowDownward } from "react-icons/md";

const About = () => {
  return (
    <div
      name="about"
      className="h-full sm:h-screen w-full bg-gray-800 text-white items-center pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4   md:flex-row">
          <div>
            <img
              src={Coding}
              alt="coding"
              className="rounded-3xl mx-auto w-[500px]  md:w-[2000px] pr-10"
            />
          </div>

          <div className="flex flex-col justify-center h-full">
            <p className="text-xl">
              {" "}
              Hi There!,
              <p className="text-xl">
                I am{" "}
                <span className="text-rose-500 hover:bg-rose-800 hover:text-white cursor-pointer">
                  Santosh
                </span>{" "}
                , self-motivated, hardworking aspiring full-stack web developer.
                I love to build websites/application that serves the world. and
                always want to enhance my knowledge & adpot new technologies
                that make impact on people.
              </p>
            </p>

            <br />

            <a
              download={true}
              href="/santosh-resume.pdf"
              onClick={() => window.open("/santosh-resume.pdf")}
              target="_blank"
              className=" border-2px-4 cursor-pointer capitalize font-medium text-white  duration-200 ">
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 shadow-lg hover:shadow-cyan-500 cursor-pointer">
                Resume
                <span>
                  <MdOutlineArrowDownward size={25} className="ml-1" />
                </span>
              </button>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
