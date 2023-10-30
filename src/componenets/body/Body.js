import React from 'react';
import Projects from './projects/Projects';
import Resume from './resume/Resume';
import Contact from './contact/Contact';
import './Body.css';

const Body = () => {
  return (
    <body className='webbody'>
        <div className='bodycontainer'>
          <h1 className='bodyheader'>Hello!</h1>
          <p className='bodytext'>I'm <div className='myname'>&nbsp;Isaac</div>, a software developer</p>
        </div>
        <Projects />
        <Resume />
        <Contact />
    </body>
  );
};

export default Body;
