import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem(props) {
  return (
    <div className='project-item-wrapper flex flex-row justify-between items-center w-[100%] h-[100%] mb-10 pb-10  border-b-2 border-neutral-500 border-opacity-10'>
      <Link
        className='w-[70%]'
        to={props.linkDestination}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={props.imageSource}
          alt='website'
          className='max-w-[550px] w-[100%] float-end'
        />
      </Link>
      <div className='project-text-section flex flex-col justify-start items-start w-[30%] min-w-[210px] ml-3 font-inter'>
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
        <p className='mb-4 '>{props.projectDescription}</p>

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

        <h3
          className={`mt-6 text-navSize font-inter font-semibold text-secondary ${
            props.participant1 ? "" : "hidden"
          }`}
        >
          Participants
        </h3>
        <p className='text-sm'>{props.participant1}</p>
        <p className='text-sm'>{props.participant2}</p>
        <p className='text-sm'>{props.participant3}</p>
        <p className='text-sm'>{props.participant4}</p>
        <p className='text-sm'>{props.participant5}</p>
        <p className='text-sm'>{props.participant6}</p>
        <p className='text-sm'>{props.participant7}</p>
        <p className='text-sm'>{props.participant8}</p>
      </div>
    </div>
  );
}
