import React from 'react';
import '../../assets/css/Footer.css';

function Footer() {
  return (
    <footer className="bg-secondary">
      <a href="https://github.com/nicnolen?tab=repositories">
        <h4>GitHub</h4>
        <img
          src="../../assets/images/icons/github.svg"
          alt="GitHub"
        
          target="_blank"
        />
      </a>
      <a href="https://www.linkedin.com/in/nicholasnolen/">
        <h4>LinkedIn</h4>
        <img
          src="../../assets/images/icons/linkedin.svg"
          alt="LinkedIn"
          target="_blank"
        />
      </a>
      <a href="https://stackoverflow.com/users/16633801/nicholas-nolen">
        <h4>Stack Overflow</h4>
        <img
          src="../../assets/images/icons/stack-overflow.svg"
          alt="Stack Overflow"
          target="_blank"
        />
      </a>
    </footer>
  );
}

export default Footer;
