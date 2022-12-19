import React from "react";
import reliancedigital from "../assets/projects/reliancedigital.png";
import jcrew from "../assets/projects/jcrew.png";
import kickstarter from "../assets/projects/kickstarter.png";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import chakraui from "../assets/chakra-ui.png";
import redux from "../assets/redux.png";


const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: reliancedigital,
      title:"Reliance Digital",
      description:" It is a cloned website of Reliance digital website. It is an ecommerce website where digital produtcs are availabele online.",
      live:'https://isnt-santoshdandin-awesome.netlify.app/',
      git:'https://github.com/Santoshdandin/Reliance-Digital-Clone',
      techs: [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "Javascript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-500",
        },
    
        {
          id: 5,
          src: redux,
          title: "Redux",
          style: "shadow-purple-500",
        },
    
        {
          id: 6,
          src: chakraui,
          title: "Chakra-UI",
          style: "shadow-cyan-500",
        },
      ],
    },
    {
      id: 2,
      src: jcrew,
      title:"Jcrew",
      live:'https://peaceful-taffy-b0242b.netlify.app/',
      git:'https://github.com/Santoshdandin/Jcrew.com-clone',
      description:" It is a cloned website of Jcrew website. It is an ecommerce website where fashion produtcs are availabele online.  ",
      techs: [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "Javascript",
          style: "shadow-yellow-500",
        },
        
      ],
    },
    {
      id: 3,
      src: kickstarter,
      title:"Kickstarter",
      live:'https://peaceful-taffy-b0242b.netlify.app/',
      git:'https://github.com/sudarshan441/mammoth-zoo-7517',
      description:" Kickstarter is an American public benefit corporation based in Brooklyn, New York, that maintains a global crowdfunding platform focused on creativity.",
      techs: [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "Javascript",
          style: "shadow-yellow-500",
        },
        
      ],
    },
  ];

 
  return (
    <div
      name="projects"
      className="h-full w-full bg-gray-800  text-white items-center pt-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-2 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-4">Check out some of my projects right here</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">

        {portfolios.map(({ id, src,title,description,techs,live,git }) => (
          
            <div key={id} className="shadow-md shadow-gray-600  rounded-lg items-center justify-center cursor-pointer">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <p className="text-2xl font-bold py-2 text-cyan-700 flex items-center justify-center">
                {title}
              </p>
              <p className="text-sm m-2 text-gray-400">
                {description}
              </p>

              <div className="w-full flex items-center justify-center text-center py-4 px-2 ">
                {techs.map(({ id, src, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 mx-2 py-2 rounded-full flex flex-col w-[40px] h-[40px] justify-center ${style}`}
                  >
                    <img src={src} alt="" className="w-6 mx-auto" />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
              <a href={live} target='_blank' rel="noreferrer" className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border border-gray-600 rounded-md  text-center "> <button >
                  Demo
                  
                </button></a>
                
                <a href={git} target='_blank' rel="noreferrer" className="w-1/2 px-1 py-3 m-4 duration-200 hover:scale-105 border border-gray-600 rounded-md text-center ">
                Github
                </a>
                
              </div>
            </div>
          
        ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
