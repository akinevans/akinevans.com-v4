import React from "react";
import cafe from "../../assets/nyleta.jpg";

//& individual project components within?

export default function Projects() {
  return (
    <div className='projects-wrapper flex flex-row w-[100%] h-auto outline outline-2 outline-red-600'>
      <a
        href='https://cafe-nyleta.netlify.app/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={cafe} alt='website' className='max-w-[550px] float-end' />
      </a>
      <div className='project-text-section flex flex-col justify-start items-start mt-4 ml-10'>
        <h1 className='text-bodySize font-inter font-semibold text-secondary'>
          Cafe Nyleta
        </h1>
        <p>E-commerce website developed....</p>

        <h2 className='mt-2 text-navSize font-inter font-semibold text-secondary'>
          Tech Stack
        </h2>
        <p>React</p>
        <p>JavaScript</p>
        <p>Redux</p>
        <p>Strapi API</p>
        <p>SASS</p>
        <p>Framer Motion</p>
      </div>
    </div>
  );
}
