import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about Me",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
    
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed ">
      <div>
        <h1 className="text-5xl font-signature ml-2">Santosh</h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 "
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
       <button className="hover:scale-105 duration-200 rounded-md bg-gradient-to-r hover:shadow-cyan-500 from-cyan-500 to-blue-500 px-3 py-1 flex items-center text-white"><a  href="/santosh-resume.pdf"
              target="_blank" className=" border-2px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 ">Resume</a></button> 
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 text-4xl "
            >
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
           
          ))}
           <Link className="px-4 cursor-pointer capitalize py-4 text-4xl ">Resume</Link>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
