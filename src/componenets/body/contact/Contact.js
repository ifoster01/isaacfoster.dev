import React from 'react';
import './Contact.css';
import LinkedIn from '../../../assets/linkedin.png';
import GitHub from '../../../assets/github.png';
import { Link } from '@aws-amplify/ui-react';

const Contact = () => {
  return (
    <body className='contactbody'>
      <h1 className='contactheader'>Contact</h1>
      <section className='contact'>
        <div className='contactcontainer'>
          <h1 className='contactblurb'>
            Thanks for stopping by! You can reach out via email or LinkedIn. Also check out my GitHub to see my most recent projects and repositories.
            <br />
            <br />
            email: ifoster41901@gmail.com
          </h1>
          <ul className='contactpoints'>
            <li className='linkedin'>
              <a href='https://www.linkedin.com/in/isaac-foster-2024/' target='_blank'>
                <img src={LinkedIn} alt='LinkedIn' className='contactimg'/>
              </a>
            </li>
            <li className='github'>
              <a href='https://github.com/ifoster01' target='_blank'>
                <img src={GitHub} alt='GitHub' className='contactimg'/>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </body>
  );
};

export default Contact;
