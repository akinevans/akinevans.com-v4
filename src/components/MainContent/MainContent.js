import React from "react";
import Projects from "../Projects/Projects";
import self from "../../assets/self.webp";

export default function MainContent() {
  return (
    <div className='all-content-wrapper flex flex-col justify-start items-center  max-h-[500px] overflow-y-scroll no-scrollbar'>
      <div className='main-content-wrapper flex flex-row justify-between items-center gap-20 w-[100%] h-[100%] min-h-[500px]'>
        <img
          src={self}
          alt='akin'
          className='photo max-w-[320px] max-h-[481.5px] select-none'
        />

        <section className='text-content flex flex-col justify-start items-start max-w-[388px] h-[481.5px] '>
          <h1 className='mt-16 font-inter text-titleSize font-bold'>
            Akin <span>Evans</span>
          </h1>
          <h2 className='font-inter text-subTitleSize mb-10 uppercase leading-4 tracking-tighter'>
            <span className='text-tertiary'>Front-End</span> Developer
          </h2>
          <p className='font-inter text-bodySize leading-6 tracking-tight select-none'>
            Throughout my career, I have honed my expertise in web development,
            tech support, and assisting others. With over a decade of experience
            in customer service, I have cultivated strong problem-solving
            abilities, a keen eye for detail, and exceptional communication
            skills.
          </p>
        </section>
      </div>
      <Projects />
    </div>
  );
}
