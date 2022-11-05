
import React from "react";

import GitHubCalendar from "react-github-calendar";


const GithubStat = () => {
  return (
    <div className='my-10 items-center' >
      
      <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Github Stats</p>
       
      <div className=" bg-gray-800 rounded-md my-10 shadow-lg flex flex-col items-center py-10" >
        <GitHubCalendar username="Santoshdandin"/>
      </div>
      <div className=' flex flex-col items-center'>
        <a href="https://github.com/Santoshdandin" rel="noreferrer" target="_blank">
          <img
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=Santoshdandin&show_icons=true&count_private=true&theme=algolia"
            height="192px"
          />
        </a>
      </div>
      
    </div>
  );
};
export default GithubStat;