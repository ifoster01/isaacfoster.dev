import React from 'react';
import './Projects.css';
import Pickpockt from '../../../assets/pickpockt long.png';
import PickpocktScreen from '../../../assets/Pickpockt Web SC.png';
import AixusTitle from '../../../assets/aixus title logo.png'
import AixusScreen from '../../../assets/Aixus Dashboard Screen.png';
import ReadeeVideo from '../../../assets/Readee Demonstration Video.mp4';
import ReadeeFull from '../../../assets/Readee Logo Full.png'
import BidOS from '../../../assets/bidos logo.png';
import BidOSScreen from '../../../assets/bidos screen.png';
import BPLScreen from '../../../assets/BPL Screen.png';

const Projects = ({ isMobile }) => {
  return (
    <body className='projectsbody'>
      <h1 className='projectheader'>
        Projects
      </h1>
      <ul className='projectslist'>
        <li className='projectcard' id='aixuscard'>
          <div className='projectwrapper'>
            <div className='projecttitle'>
                <img className='titleimg' src={Pickpockt} alt='Aixus Helth' />
            </div>
            <p>
              Pickpockt is a web application and iOS app that uses machine learning to predict the outcome of UFC and NFL events. The stack consists of a React, Next.js, Tailwind CSS, and TypeScript frontend with a Supabase and Python backend.
            </p>
          </div>
          <div className='rightimgcontainer'>
            <a href='https://www.pickpockt.com/' target='_blank'>
              <img className='projectimg' id='pickpocktimg' src={PickpocktScreen} alt='Pickpockt'/>
            </a>
          </div>
        </li>
        <li className='projectcard' id='aixuscard'>
          <div className='projectwrapper'>
            <div className='projecttitle'>
                <img className='titleimg' src={AixusTitle} alt='Aixus Helth' />
            </div>
            <p>
              Aixus Health is a startup developing a web application that provides patients with a comprehentive interface to communicate with their healthcare providers with an emphasis on informed consent and outpatient care. The stack consists of a React, Next.js, Tailwind CSS, and TypeScript frontend with a Supabase backend.
            </p>
          </div>
          <div className='rightimgcontainer'>
            <a href='https://www.aixushealth.com/' target='_blank'>
              <img className='projectimg' id='aixusimg' src={AixusScreen} alt='Aixus Health'/>
            </a>
          </div>
        </li>
        <li className='projectcard' id='readeecard'>
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
          <div className='leftimgcontainer' id='readeedemo'>
            <video className='projectimg' controls>
              <source src={ReadeeVideo} type='video/mp4' />
            </video>
            {/* <img className='projectimg' id='readeeimg' src={Readee} alt='BestProfessorList'/> */}
          </div>
        </li>
        <li className='projectcard' id='bidoscard'>
          <div className='projectwrapper'>
            <div className='projecttitle'>
              <img className='titleimg' id='bidostitleimg' src={BidOS} alt='BidOS' />
            </div>
            <p>
              BidOS is an open source crowd funding platform for open source projects. The goal is to provide open source contributors with a way to sustain themselves while working on open source projects. The stack consists of a React and Node.js frontend with a AWS DynamoDB backend.
            </p>
          </div>
          <div className='rightimgcontainer'>
            <a href='https://bidos.net/' target='_blank'>
              <img className='projectimg' id='bidosimg' src={BidOSScreen} alt='BidOS'/>
            </a>
          </div>
        </li>
        <li className='projectcard' id='bplcard'>
          <div className='projectwrapper'>
            <h1 className='projecttitle'>
              BestProfessorList
            </h1>
            <p>
              BestProfessorList is a website providing students with a way to search for classes and view a list of the top rated professors for that class. It aims to streamline the class search and registration process for RPI students. The frontend was built using React and Node.js, and the backend was built using AWS DynamoDB.
            </p>
          </div>
          <div className='leftimgcontainer'>
            <a href='https://main.d1wj2utf4l5y91.amplifyapp.com/' target='_blank' className='imglink'>
              <img className='projectimg' id='bplimg' src={BPLScreen} alt='BestProfessorList'/>
            </a>
          </div>
        </li>
      </ul>
    </body>
  );
};

export default Projects;