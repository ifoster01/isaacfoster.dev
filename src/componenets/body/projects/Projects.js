import React from 'react';
import './Projects.css';
import Aixus from '../../../assets/aixus logo.png';
import AixusTitle from '../../../assets/aixus title logo.png'
import AixusScreen from '../../../assets/Aixus Dashboard Screen.png';
import Readee from '../../../assets/readee logo.png';
import ReadeeVideo from '../../../assets/Readee Demonstration Video.mp4';
import ReadeeFull from '../../../assets/Readee Logo Full.png'
import BidOS from '../../../assets/bidos logo.png';
import BidOSScreen from '../../../assets/bidos screen.png'
import BPL from '../../../assets/bpl logo.png';
import BPLScreen from '../../../assets/BPL Screen.png';

const Projects = () => {
  return (
    <body className='projectsbody'>
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
              Aixus Health is a web application that provides patients with a comprehentive interface to communicate with their healthcare providers.
            </p>
          </div>
          <div className='rightimgcontainer'>
            <img className='projectimg' id='aixusimg' src={AixusScreen} alt='Aixus Health'/>
          </div>
        </li>
        <li className='projectcard'>
          <div className='leftimgcontainer'>
            <video className='projectimg' controls>
              <source src={ReadeeVideo} type='video/mp4' />
            </video>
            {/* <img className='projectimg' id='readeeimg' src={Readee} alt='BestProfessorList'/> */}
          </div>
          <div className='projectwrapper'>
            <div className='projecttitle'>
              <img className='titleimg' id='bidostitleimg' src={ReadeeFull} alt='BidOS' />
            </div>
            <p>
              Readee is a chrome extension that provides users with a 3D model and a definition of a word they select from the website.
            </p>
          </div>
        </li>
        <li className='projectcard'>
          <div className='projectwrapper'>
            <div className='projecttitle'>
              <img className='titleimg' id='bidostitleimg' src={BidOS} alt='BidOS' />
            </div>
            <p>
              BidOS is a crowd funding platform for open source projects. 
            </p>
          </div>
          <div className='rightimgcontainer'>
            <img className='projectimg' id='bidosimg' src={BidOSScreen} alt='BidOS'/>
          </div>
        </li>
        <li className='projectcard'>
          <div className='leftimgcontainer'>
            {/* <a href='https://main.d1wj2utf4l5y91.amplifyapp.com/'></a> */}
            <img className='projectimg' id='bplimg' src={BPLScreen} alt='BestProfessorList'/>
          </div>
          <div className='projectwrapper'>
            <h1 className='projecttitle'>
              BestProfessorList
            </h1>
            <p>
              BestProfessorList is a website that provides students with a way to search for classes and view a list of the top rated professors for that class.
            </p>
          </div>
        </li>
      </ul>
    </body>
  );
};

export default Projects;