import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <body className='contactbody'>
      <h1 className='contactheader'>Contact</h1>
      <section className='contact'>
        <div className='contactcontainer'>
          <h1 className='contactblurb'>
            Thanks for stopping by! You can reach out via email or LinkedIn. Also check out my GitHub to see my most recent projects and repositories.
          </h1>
          <ul className='contactpoints'>
            <li className='email'>
              ifoster41901@gmail.com
            </li>
            <li className='LinkedIn'>
              <a href='https://www.linkedin.com/in/isaac-foster-2024/'>LinkedIn</a>
            </li>
            <li className='github'>
              <a href='https://github.com/ifoster01'>GitHub</a>
            </li>
          </ul>
        </div>
      </section>
    </body>
  );
};

export default Contact;
