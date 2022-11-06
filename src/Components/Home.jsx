import React from "react";
import HeroImage from "../assets/profile5.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 items-center pt-20">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h5 className="text-1xl sm:text-1xl font-bold text-gray-800">Hi there </h5>

          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm <span className="text-rose-700">Santosh</span> </h2>

          <h4 className="text-2xl sm:text-1xl font-bold text-white">Full Stack web Developer</h4>
          <p className="text-gray-500 py-4 max-w-md">I’m a Full-Stack web developer. Focused on building products that will make people's lives better. I love to learn new things and I am always open to learn new technologies.</p>
          

          <div>
            <Link 
            to='skills' smooth duration={500}className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
            <img src={HeroImage}  alt="hero" className="rounded-3xl mx-auto w-1/2 bg-slate-600 md:w-2/3"/>
        </div>
      </div>
    </div>
  );
};

export default Home;

