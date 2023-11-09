import {React, useState, useEffect, useRef} from 'react';
import './Navbar.css';
import Headshot from '../../assets/Isaac Foster Headshot.jpg'

const Navbar = ({ refHome, refProject, refResume, refContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isActiveHome, setActiveHome] = useState(true);
  const [isActiveProject, setActiveProject] = useState(false);
  const [isActiveResume, setActiveResume] = useState(false);
  const [isActiveContact, setActiveContact] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    // const clientHeight = document.documentElement.clientHeight;
    // console.log("scrolled y:" + offset);
    // console.log("scroll height:" + scrollHeight)
    // console.log("client height:" + clientHeight)
    if (offset > 0 ){
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
    if ((offset / scrollHeight) * 100 < 16) {
      setActiveHome(true);
      setActiveProject(false);
      setActiveResume(false);
      setActiveContact(false);
    }
    if ((offset / scrollHeight) * 100 > 16) {
      setActiveHome(false);
      setActiveProject(true);
      setActiveResume(false);
      setActiveContact(false);
    }
    if ((offset / scrollHeight) * 100 > 64) {
      setActiveHome(false);
      setActiveProject(false);
      setActiveResume(true);
      setActiveContact(false);
    }
    if ((offset / scrollHeight) * 100 > 80) {
      setActiveHome(false);
      setActiveProject(false);
      setActiveResume(false);
      setActiveContact(true);
    }
  }

  const homeClick = () => {
    refHome.current.scrollIntoView({behavior: 'smooth'})
  }
  const projectClick = () => {
    refProject.current.scrollIntoView({behavior: 'smooth'})
  }
  const resumeClick = () => {
    refResume.current.scrollIntoView({behavior: 'smooth'})
  }
  const contactClick = () => {
    refContact.current.scrollIntoView({behavior: 'smooth'})
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  });

  return (
    <nav className={scrolled ? 'mynav scrolled' : 'mynav'}>
      <ul className='navul'>
        <li className='navli' id='navheadshot'>
          <a href='#' className='navlogo'>
            <img src={Headshot} alt='Isaac Foster' id='headshot'/>
          </a>
        </li>
        <li className='navli' id='navhome'>
          <button className={
            isActiveHome ? 'activenav' : 
              (scrolled ? 'navbuttonscrolled' : 'navbutton')
            } onClick={homeClick}>
            Home
          </button>
        </li>
        <li className='navli' id='navprojects'>
          <button className={
            isActiveProject ? 'activenav' : 
              (scrolled ? 'navbuttonscrolled' : 'navbutton')
            } onClick={projectClick}>
            Projects
          </button>
        </li>
        <li className='navli' id='navabout'>
          <button className={
            isActiveResume ? 'activenav' : 
              (scrolled ? 'navbuttonscrolled' : 'navbutton')
            } onClick={resumeClick}>
            Resume
          </button>
        </li>
        <li className='navli' id='navcontact'>
          <button className={
            isActiveContact ? 'activenav' : 
              (scrolled ? 'navbuttonscrolled' : 'navbutton')
            } onClick={contactClick}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
