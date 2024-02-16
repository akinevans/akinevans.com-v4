import React from "react";

export default function Navbar() {
  return (
    <nav className='nav-wrapper flex flex-col gap-16 w-fit h-[500px] max-h-[500px] font-inter text-secondary font-bold text-navSize'>
      <a href=''>
        <span className='text-tertiary mr-[12px]'>1.</span>About
      </a>
      <a href=''>
        <span className='text-tertiary mr-[12px]'>2.</span>Projects
      </a>
      <a href=''>
        <span className='text-tertiary mr-[12px]'>3.</span>Github
      </a>
      <a href=''>
        <span className='text-tertiary mr-[12px]'>4.</span>LinkedIn
      </a>
      <a href=''>
        <span className='text-tertiary mr-[12px]'>5.</span>Resume
      </a>
      <a href=''>
        <span className='text-tertiary mr-[12px]'>6.</span>Contact
      </a>
    </nav>
  );
}
