import React from 'react';
import './Resume.css';
import ResumePDF from '../../../assets/Isaac Foster Resume.pdf';

const Resume = () => {
  return (
    <body className='resumebody'>
      <h1 className='resumeheader'>Resume</h1>
      <section className='resume'>
        <div className='resumecontainer'>
          <iframe src={ResumePDF} className='resumepdf'/>
        </div>
      </section>
    </body>
  );
};

export default Resume;