import React from 'react';
import Projects from './projects/Projects';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import './Body.css';

const Body = () => {
  return (
    <body className='webbody'>
        <div className='bodycontainer'>
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
            img placeholder
            {/* <img src='' alt='Isaac' className='myimage' /> */}
          </div>
        </div>
        <Projects />
        <Resume />
        <Contact />
    </body>
  );
};

export default Body;
