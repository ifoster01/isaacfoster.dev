import React from 'react';
import './Projects.css';
import Aixus from '../../../assets/aixus logo.png';
import AixusTitle from '../../../assets/aixus title logo.png'
import BidOS from '../../../assets/bidos logo.png';
import BidOSScreen from '../../../assets/bidos screen.png'
import BPL from '../../../assets/bpl logo.png';
import Readee from '../../../assets/readee logo.png';

const Projects = () => {
  return (
    <body>
      <h1 className='projectheader'>
        Projects
      </h1>
      <ul className='projectslist'>
        <li className='projectcard' id='aixuscard'>
        <div className='projectwrapper'>
            <div className='projecttitle'>
              <img className='titleimg' src={AixusTitle} alt='Aixus Helth' />
            </div>
            <p>
              Readee is a web application that allows users to search for books and add them to their reading list. The application uses the Google Books API to search for books and the user can add them to their reading list. The user can also remove books from their reading list. The application uses ReactJS for the front end and Redux for state management. The application also uses Firebase for authentication and database storage.
            </p>
          </div>
          <div className='imgcontainer'>
            <img className='projectimg' id='aixusimg' src={Aixus} alt='Aixus Health'/>
          </div>
        </li>
        <li className='projectcard'>
          <div className='imgcontainer'>
            <img className='projectimg' id='bidosimg' src={BidOSScreen} alt='BidOS'/>
          </div>
          <div className='projectwrapper'>
            <div className='projecttitle'>
              <img className='titleimg' id='bidostitleimg' src={BidOS} alt='BidOS' />
            </div>
            <p>
              Readee is a web application that allows users to search for books and add them to their reading list. The application uses the Google Books API to search for books and the user can add them to their reading list. The user can also remove books from their reading list. The application uses ReactJS for the front end and Redux for state management. The application also uses Firebase for authentication and database storage.
            </p>
          </div>
        </li>
        <li className='projectcard'>
          <div className='projectwrapper'>
            <h1 className='projecttitle'>
              Readee
            </h1>
            <p>
              Readee is a web application that allows users to search for books and add them to their reading list. The application uses the Google Books API to search for books and the user can add them to their reading list. The user can also remove books from their reading list. The application uses ReactJS for the front end and Redux for state management. The application also uses Firebase for authentication and database storage.
            </p>
          </div>
          <div className='imgcontainer'>
            <img className='projectimg' id='readeeimg' src={Readee} alt='BestProfessorList'/>
          </div>
        </li>
        <li className='projectcard'>
          <div className='imgcontainer'>
            <img className='projectimg' id='bplimg' src={BPL} alt='BestProfessorList'/>
          </div>
          <div className='projectwrapper'>
            <h1 className='projecttitle'>
              BestProfessorList
            </h1>
            <p>
              Readee is a web application that allows users to search for books and add them to their reading list. The application uses the Google Books API to search for books and the user can add them to their reading list. The user can also remove books from their reading list. The application uses ReactJS for the front end and Redux for state management. The application also uses Firebase for authentication and database storage.
            </p>
          </div>
        </li>
      </ul>
    </body>
  );
};

export default Projects;