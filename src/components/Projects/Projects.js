import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import { projectData } from "../../data/data";

export default function Projects() {
  return (
    <div className='projects-wrapper flex flex-col w-[100%] h-fit max-h-[900px] overflow-y-scroll no-scrollbar shadow-sm'>
      {projectData.map((data) => (
        <ProjectItem
          imageSource={data.src}
          projectTitle={data.title}
          linkDestination={data.link}
          projectDescription={data.description}
          stack1={data.stack1}
          stack2={data.stack2}
          stack3={data.stack3}
          stack4={data.stack4}
          stack5={data.stack5}
          stack6={data.stack6}
          stack7={data.stack7}
          stack8={data.stack8}
          githubLink={data.githubLink}
          participant1={data.participant1}
          participant2={data.participant2}
          participant3={data.participant3}
          participant4={data.participant4}
          participant5={data.participant5}
          participant6={data.participant6}
          participant7={data.participant7}
          participant8={data.participant8}
        />
      ))}
    </div>
  );
}
