import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  // get current URL
  function HeaderView() {
    const location = useLocation();
    console.log(location.pathname);
    return location.pathname;
  }
  HeaderView();

  const setActiveStyling = (link, active) => {
    return link === active ? "text-primary bg-secondary" : "";
  };

  useEffect(() => {
    setActiveLink(HeaderView);
  }, []);

  return (
    <nav className='nav-wrapper flex flex-col gap-16 w-fit h-[500px] max-h-[500px] mr-4 font-inter text-secondary font-bold text-navSize'>
      <div className='link-wrapper flex flex-row justify-start items-center'>
        <span className=''>1.</span>
        <Link
          to='/'
          className={`mx-[12px] py-1 px-2 transition ease-in-out delay-100  ${setActiveStyling(
            "/",
            activeLink
          )}`}
          onClick={() => {
            setActiveLink("/");
          }}
        >
          About
        </Link>
      </div>

      <div className='link-wrapper flex flex-row justify-start items-center'>
        <span className=''>2.</span>
        <Link
          to='/projects'
          className={`mx-[12px] py-1 px-2 transition ease-in-out delay-100 ${setActiveStyling(
            "/projects",
            activeLink
          )}`}
          onClick={() => {
            setActiveLink("/projects");
          }}
        >
          Projects
        </Link>
      </div>

      <div className='link-wrapper flex flex-row justify-start items-center'>
        <span className=''>3.</span>
        <Link
          to='https://github.com/akinevans'
          className={`mx-[12px] py-1 px-2`}
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </Link>
      </div>

      <div className='link-wrapper flex flex-row justify-start items-center'>
        <span className=''>4.</span>
        <Link
          to='https://www.linkedin.com/in/akinevans/'
          className={`mx-[12px] py-1 px-2`}
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </Link>
      </div>

      <div className='link-wrapper flex flex-row justify-start items-center'>
        <span className=''>5.</span>
        <Link
          to=''
          className={`mx-[12px] py-1 px-2`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
        </Link>
      </div>

      <div className='link-wrapper flex flex-row justify-start items-center'>
        <span className=''>6.</span>
        <Link
          to=''
          className={`mx-[12px] py-1 px-2`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
