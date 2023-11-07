import {React, useState, useEffect, useRef} from 'react';
import './Navbar.css';
import Headshot from '../../assets/Isaac Foster Headshot.jpg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const refNavbar = useRef();

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 0 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
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
          Home
        </li>
        <li className='navli' id='navprojects'>
          Projects
        </li>
        <li className='navli' id='navabout'>
          Resume
        </li>
        <li className='navli' id='navcontact'>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
