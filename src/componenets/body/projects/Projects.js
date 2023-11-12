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
              Aixus Health is a startup developing a web application that provides patients with a comprehentive interface to communicate with their healthcare providers with an emphasis on informed consent and outpatient care. The stack consists of a React, Next.js, Tailwind CSS, and TypeScript frontent with a Supabase backend.
            </p>
          </div>
          <div className='rightimgcontainer'>
            <a href='https://www.aixushealth.com/' target='_blank'>
              <img className='projectimg' id='aixusimg' src={AixusScreen} alt='Aixus Health'/>
            </a>
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
              <a href='https://github.com/tommycbird/Readee' target='_blank'>
                <img className='titleimg' id='readeeimg' src={ReadeeFull} alt='BidOS' />
              </a>
            </div>
            <p>
              Readee is a chrome extension providing users with 3D models and context specific definitions of words they select on a given website. It uses Echo3D's JS SDK, and GPT-4 API via Node.js hosted on an Amazon AWS EC2 instance. The front-end and button injection was made by using HTML, CSS, and JavaScript.
            </p>
          </div>
        </li>
        <li className='projectcard'>
          <div className='projectwrapper'>
            <div className='projecttitle'>
              <img className='titleimg' id='bidostitleimg' src={BidOS} alt='BidOS' />
            </div>
            <p>
              BidOS is an open source crowd funding platform for open source projects. The goal is to provide open source contributors with a way to sustain themselves while working on open source projects. The stack consists of a React and Node.js frontent with a AWS DynamoDB backend.
            </p>
          </div>
          <div className='rightimgcontainer'>
            <a href='https://bidos.net/' target='_blank'>
              <img className='projectimg' id='bidosimg' src={BidOSScreen} alt='BidOS'/>
            </a>
          </div>
        </li>
        <li className='projectcard'>
          <div className='leftimgcontainer'>
            <a href='https://main.d1wj2utf4l5y91.amplifyapp.com/' target='_blank' className='imglink'>
              <img className='projectimg' id='bplimg' src={BPLScreen} alt='BestProfessorList'/>
            </a>
            {/* <div className='imgoverlay'>
            </div> */}
          </div>
          <div className='projectwrapper'>
            <h1 className='projecttitle'>
              BestProfessorList
            </h1>
            <p>
              BestProfessorList is a website providing students with a way to search for classes and view a list of the top rated professors for that class. It aims to streamline the class search and registration process for RPI students. The frontent was built using React and Node.js, and the backend was built using AWS DynamoDB.
            </p>
          </div>
        </li>
      </ul>
    </body>
  );
};

export default Projects;