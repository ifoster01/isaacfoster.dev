import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <body>
        <ul className='projectslist'>
          <li id='aixuscard'>
            <h1 id='aixustitle'>
              Aixus Health
            </h1>
            <div className='imgcontainer'>
              <img id='aixusimg' src='https://i.imgur.com/2ZQ4Z5X.png' alt='Aixus Health'/>
            </div>
          </li>
          <li id='bplcard'>
            <h1 id='bpltitle'>
              BestProfessorList
            </h1>
          </li>
          <li id='bidoscard'>
            <h1 id='bidostitle'>
              BidOS
            </h1>
          </li>
        </ul>
    </body>
  );
};

export default Projects;