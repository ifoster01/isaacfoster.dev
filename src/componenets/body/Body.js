import { React, useRef, useState, useEffect, useLayoutEffect } from 'react';
import './Body.css';
import Navbar from '../navbar/Navbar';
import Projects from './projects/Projects';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import bodyimage from '../../assets/Isaac Foster Body.jpg'

const Body = () => {
  const refHome = useRef(null);
  const refProject = useRef(null);
  const refResume = useRef(null);
  const refContact = useRef(null);
  // console.log(document.documentElement.clientWidth);
  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension < 771;

  return (
    <>
      <Navbar refHome={refHome} refProject={refProject} refResume={refResume} refContact={refContact} mobileNav={isMobile} />
      <body className='webbody'>
        {isMobile ? 
          <div className='bodycontainer' ref={refHome}>
            <div className='introcontainer'>
              <div id='hello'>
                <h1 className='bodyheader'>Hello!</h1>
                <p className='bodytext'>
                  I'm <div className='myname'>&nbsp;Isaac</div>,
                </p>
                <p className='bodytext'>
                  a software developer
                </p>
              </div>
              <div id='mypicture'>
                <img src={bodyimage} alt='Isaac' className='myimage' />
              </div>
            </div>
            <p id='aboutme'>
              I study computer science at Rensselaer Polytechnic Institute and I'm graduating in Spring 2024. The past two summers I've worked as a software development intern at deFacto Global, a local software solutions company built for budgeting, forecasting, and analysis. Additionally, this past summer I worked as a full stack developer at a startup, Aixus Health, which provides an interface for patients and providers.
            </p>
          </div>
        :
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
                I study computer science at Rensselaer Polytechnic Institute and I'm graduating in Spring 2024. The past two summers I've worked as a software development intern at deFacto Global, a local software solutions company built for budgeting, forecasting, and analysis. Additionally, this past summer I worked as a full stack developer at a startup, Aixus Health, which provides an interface for patients and providers.
              </p>
            </div>
            <div id='mypicture'>
              <img src={bodyimage} alt='Isaac' className='myimage' />
            </div>
          </div>
        }
        <div ref={refProject}>
          <Projects isMobile={isMobile} />
        </div>
        <div ref={refResume}>
          <Resume />
        </div>
        <div ref={refContact}>
          <Contact />
        </div>
      </body>
      <footer className='footertext'>
        ** Website designed and implemented by Isaac Foster **
      </footer>
    </>
  );
};

export default Body;
