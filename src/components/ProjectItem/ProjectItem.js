import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem(props) {
  return (
    <div className='project-item-wrapper flex flex-row w-[100%] h-[100%] mb-10 pb-10  border-b-2 border-neutral-500 border-opacity-10 '>
      <Link
        to={props.linkDestination}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={props.imageSource}
          alt='website'
          className='max-w-[550px] float-end'
        />
      </Link>
      <div className='project-text-section flex flex-col justify-start items-start ml-4 font-inter'>
        <div className='links-wrapper flex flex-col mb-4'>
          <Link
            className='underline'
            to={props.linkDestination}
            target='_blank'
            rel='noopener noreferrer'
          >
            {`Link to ${props.projectTitle}`}
          </Link>
          <Link
            className='underline'
            to={props.githubLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            Github Repo
          </Link>
        </div>
        <h1 className='text-subTitleSize font-inter font-semibold text-secondary'>
          {props.projectTitle}
        </h1>
        <p className='mb-6 '>{props.projectDescription}</p>

        <h2 className='mt-2 text-bodySize font-inter font-semibold text-secondary'>
          Tech Stack
        </h2>
        <p>{props.stack1}</p>
        <p>{props.stack2}</p>
        <p>{props.stack3}</p>
        <p>{props.stack4}</p>
        <p>{props.stack5}</p>
        <p>{props.stack6}</p>
        <p>{props.stack7}</p>
        <p>{props.stack8}</p>
      </div>
    </div>
  );
}
