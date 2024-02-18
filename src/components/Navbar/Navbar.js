import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='nav-wrapper flex flex-col gap-16 w-fit h-[500px] max-h-[500px] mr-4 font-inter text-secondary font-bold text-navSize'>
      <Link to='/'>
        <span className='text-tertiary mr-[12px]'>1.</span>About
      </Link>
      <Link to='/projects'>
        <span className='text-tertiary mr-[12px]'>2.</span>Projects
      </Link>
      <Link
        to='https://github.com/akinevans'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='text-tertiary mr-[12px]'>3.</span>Github
      </Link>
      <Link
        to='https://www.linkedin.com/in/akinevans/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <span className='text-tertiary mr-[12px]'>4.</span>LinkedIn
      </Link>
      <Link to=''>
        <span className='text-tertiary mr-[12px]'>5.</span>Resume
      </Link>
      <Link to=''>
        <span className='text-tertiary mr-[12px]'>6.</span>Contact
      </Link>
    </nav>
  );
}
