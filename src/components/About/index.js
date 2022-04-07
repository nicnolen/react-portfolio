import React from 'react';
import '../../assets/css/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <section className="container">
      <h2 className="top-title mt-5 mb-3">About Me</h2>

      <figure className="d-flex justify-content-center mb-5">
        <img
          className="professional-picture"
          src="http://nicnolen.github.io/react-portfolio/assets/images/portfolioImages/professional-picture.png"
          alt="Professional Headshot"></img>
      </figure>

      <h3 className="about-intro text-center mb-4">
        Hello, I'm Nicholas Nolen
      </h3>
      <div className="about-info text-center mb-5">
        <p>
          I am a Full Stack Web Developer leveraging a business background to
          build sites oriented towards mobile responsiveness.
        </p>
        <p>
          {' '}
          I earned a certificate in Full-Stack Web Development from the
          University of Texas at Austin’s Web Development Boot Camp with newly
          developed skills in HTML, CSS, JavaScript, and React.js.
        </p>
        <p>
          I am known for using time management, attention to detail and strong
          written and verbal communication to complete even the most complex of
          tasks.
        </p>
        <p>
          I applied aspects of front-end development in a recent project. I
          worked on a team of five to develop an application that allows a
          travel enthusiast to create an account to log past, upcoming, and
          bucket-list trips.
        </p>
        <p>
          I enjoy working with a fast-paced, quality-driven team to provide
          creative solutions to complex problems and exceed project
          expectations.
        </p>
      </div>
    </section>
  );
}

export default About;
