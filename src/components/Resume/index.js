import React from 'react';
import resume from '../../assets/images/portfolioImages/resume.pdf';

function Resume() {
  return (
    <section className='container'>
      <h2 className='top-title'>Resume</h2>

      <a href={resume} target='_blank' rel='noreferrer'>
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
