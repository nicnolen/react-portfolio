import React from 'react';
import '../../assets/css/Resume.css';
import resume from '../../assets/images/portfolioImages/resume.pdf';
import FrontendSkills from '../FrontendSkills';
import BackendSkills from '../BackendSkills';
import TechnicalSkills from '../TechnicalSkills';
import skillsInfo from './skills.json';

function Resume() {
  const Wrapper = props => {
    return <div className='wrapper'>{props.children}</div>;
  };
  return (
    <section className='container'>
      <h2 className='top-title'>Resume</h2>
      <div>
        <a href={resume} target='_blank' rel='noreferrer'>
          Download Resume
        </a>
      </div>
      <div>
        <h3>Skills</h3>
        <Wrapper id='card-data'>
          <h4>Front End Skills</h4>
          {skillsInfo.map((skill, i) => (
            <FrontendSkills
              key={i}
              name={skill.name}
              category={skill.category}
              documentation={skill.documentation}
            />
          ))}
          <h4>Back End Skills</h4>
          {skillsInfo.map((skill, i) => (
            <BackendSkills
              key={i}
              name={skill.name}
              category={skill.category}
              documentation={skill.documentation}
            />
          ))}
          <h4>Technical Skills</h4>
          {skillsInfo.map((skill, i) => (
            <TechnicalSkills
              key={i}
              name={skill.name}
              category={skill.category}
              documentation={skill.documentation}
            />
          ))}
        </Wrapper>
      </div>
    </section>
  );
}

export default Resume;
