import React from 'react';
import FrontendSkills from '../FrontendSkills';
import BackendSkills from '../BackendSkills';
import TechnicalSkills from '../TechnicalSkills';
import skillsInfo from './skills.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  const Wrapper = props => {
    return <div className='wrapper'>{props.children}</div>;
  };

  return (
    <section className='container'>
      <h2 className='top-title'>About Me</h2>
      <hr></hr>
      <div>
        <img
          className='mb-5'
          src='../../assets/images/portfolioImages/professional-picture.png'
          alt='Professional Headshot'
          width='150'
          height='70'></img>
        <h3 className='about-intro'>Hello, I'm Nicholas Nolen</h3>
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

      <Wrapper id='card-data'>
        <h3> Front End Skills</h3>
        {skillsInfo.map((skill, i) => (
          <FrontendSkills
            key={i}
            name={skill.name}
            category={skill.category}
            documentation={skill.documentation}
          />
        ))}
        <h3> Back End Skills</h3>
        {skillsInfo.map((skill, i) => (
          <BackendSkills
            key={i}
            name={skill.name}
            category={skill.category}
            documentation={skill.documentation}
          />
        ))}
        <h3> Technical Skills</h3>
        {skillsInfo.map((skill, i) => (
          <TechnicalSkills
            key={i}
            name={skill.name}
            category={skill.category}
            documentation={skill.documentation}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default About;
