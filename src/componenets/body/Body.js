import { React, useRef } from 'react';
import './Body.css';
import Navbar from '../navbar/Navbar';
import Projects from './projects/Projects';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import bodyimage from '../../assets/body img.jpg'

const Body = () => {
  const refHome = useRef(null);
  const refProject = useRef(null);
  const refResume = useRef(null);
  const refContact = useRef(null);

  return (
    <>
      <Navbar refHome={refHome} refProject={refProject} refResume={refResume} refContact={refContact} />
      <body className='webbody'>
          <div className='bodycontainer' ref={refHome}>
            <div id='hello'>
              <h1 className='bodyheader'>Hello!</h1>
              <p className='bodytext'>
                I'm <div className='myname'>&nbsp;Isaac</div>,
              </p>
              <p className='bodytext'>
                a software developer
              </p>
              <p id='aboutme'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div id='mypicture'>
              <img src={bodyimage} alt='Isaac' className='myimage' />
            </div>
          </div>
          <div ref={refProject}>
            <Projects />
          </div>
          <div ref={refResume}>
            <Resume />
          </div>
          <div ref={refContact}>
            <Contact />
          </div>
      </body>
    </>
  );
};

export default Body;
