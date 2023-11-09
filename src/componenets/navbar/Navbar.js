import {React, useState, useEffect, useRef} from 'react';
import './Navbar.css';
import Headshot from '../../assets/Isaac Foster Headshot.jpg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const refNavbar = useRef(null);
  const [isActiveHome, setActiveHome] = useState(true);
  const [isActiveProject, setActiveProject] = useState(false);
  const [isActiveResume, setActiveResume] = useState(false);
  const [isActiveContact, setActiveContact] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);
    if (offset > 0 ){
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
    if (offset < 534) {
      setActiveHome(true);
      setActiveProject(false);
      setActiveResume(false);
      setActiveContact(false);
    }
    if (offset > 534) {
      setActiveHome(false);
      setActiveProject(true);
      setActiveResume(false);
      setActiveContact(false);
    }
    if (offset > 2134) {
      setActiveHome(false);
      setActiveProject(false);
      setActiveResume(true);
      setActiveContact(false);
    }
    if (offset > 2586) {
      setActiveHome(false);
      setActiveProject(false);
      setActiveResume(false);
      setActiveContact(true);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  });

  return (
    <nav className={scrolled ? 'mynav scrolled' : 'mynav'} ref={refNavbar}>
      <ul className='navul'>
        <li className='navli' id='navheadshot'>
          <a href='#' className='navlogo'>
            <img src={Headshot} alt='Isaac Foster' id='headshot'/>
          </a>
        </li>
        <li className='navli' id='navhome'>
          <button className={isActiveHome ? 'activenav' : 'navbutton'}>
            Home
          </button>
        </li>
        <li className='navli' id='navprojects'>
          <button className={isActiveProject ? 'activenav' : 'navbutton'}>
            Projects
          </button>
        </li>
        <li className='navli' id='navabout'>
          <button className={isActiveResume ? 'activenav' : 'navbutton'}>
            Resume
          </button>
        </li>
        <li className='navli' id='navcontact'>
          <button className={isActiveContact ? 'activenav' : 'navbutton'}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
