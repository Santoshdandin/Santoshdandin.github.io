import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongo from "../assets/mongo.png";
import express from "../assets/express.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import chakraui from "../assets/chakra-ui.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";

import GithubStat from "./GithubStat";

const Skills = () => {

const techs = [
    {
        id:1,
        src:html,
        title:"HTML",
        style:"shadow-orange-500"
    },
    {
        id:2,
        src:css,
        title:"CSS",
        style:"shadow-blue-500"
    },
    {
        id:3,
        src:javascript,
        title:"Javascript",
        style:"shadow-yellow-500"
    },
    {
        id:4,
        src:reactImage,
        title:"React",
        style:"shadow-blue-500"
    },

    {
        id:10,
        src:redux,
        title:"Redux",
        style:"shadow-purple-500"
    },

   
    {
        id:6,
        src:mongo,
        title:"Mongo-DB",
        style:"shadow-green-400"
    },
    {
        id:7,
        src:express,
        title:"Express",
        style:"shadow-gray-500"
    },
    {
        id:11,
        src:nodejs,
        title:"Node.js",
        style:"shadow-green-500"
    },
    {
        id:8,
        src:github,
        title:"Github",
        style:"shadow-gray-500"
    },
    {
        id:9,
        src:chakraui,
        title:"Chakra-UI",
        style:"shadow-cyan-500"
    },
    
    {
        id:5,
        src:tailwind,
        title:"Tailwind",
        style:"shadow-sky-400"
    },
]

  return (
    <div
      name="skills"
      className="h-full w-full bg-gray-800  text-white items-center pt-20"
    >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>

                <p className='py-6'>These are the technologies I've worked with</p>
            </div>




            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0 '>

            {techs.map(({id,src,title,style})=>(

<div key={id} className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-full flex flex-col w-40 h-40 justify-center ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>
            )

            )}

                
            </div>
            <GithubStat/>
        </div>
        

    </div>
  )
}

export default Skills