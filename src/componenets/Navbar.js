import React from 'react';
import './Navbar.css';
import Headshot from '../assets/Isaac Foster Headshot.jpg'

const Navbar = () => {
  return (
    <nav>
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
