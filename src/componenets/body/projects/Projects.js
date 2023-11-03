import React from 'react';
import './Projects.css';
import Aixus from '../../../assets/aixus logo.png';
import BidOS from '../../../assets/bidos logo.png';
import BPL from '../../../assets/bpl logo.png';

const Projects = () => {
  return (
    <body>
        <ul className='projectslist'>
          <li className='projectcard' id='aixuscard'>
            <h1 className='projecttitle'>
              Aixus Health
            </h1>
            <div className='imgcontainer'>
              <img id='aixusimg' src={Aixus} alt='Aixus Health'/>
            </div>
          </li>
          <li className='projectcard'>
            <h1 className='projecttitle'>
              BidOS
            </h1>
            <div className='imgcontainer'>
              <img id='bidosimg' src={BidOS} alt='BidOS'/>
            </div>
          </li>
          <li className='projectcard'>
            <h1 className='projecttitle'>
              BestProfessorList
            </h1>
            <div className='imgcontainer'>
              <img classname='projectimg' src={BPL} alt='BestProfessorList'/>
            </div>
          </li>
        </ul>
    </body>
  );
};

export default Projects;