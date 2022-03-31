import React from 'react';
import '../../assets/css/Resume.css';
import resume from '../../assets/images/portfolioImages/resume.pdf';
import FrontendSkills from '../FrontendSkills';
import BackendSkills from '../BackendSkills';
import TechnicalSkills from '../TechnicalSkills';
import skillsInfo from './skills.json';

function Resume() {
  const Wrapper = props => {
    return <div className="wrapper">{props.children}</div>;
  };
  return (
    <section className="container pb-5">
      <h2 className="top-title">Resume</h2>
      <div className="download-resume">
        <a href={resume} target="_blank" rel="noreferrer">
          <h3 className="pb-5">Download Resume</h3>
        </a>
      </div>
      <div>
        <h3 className="subtitle text-center pb-4">Skills</h3>
        <Wrapper id="card-data">
          <h4 className="pb-3">
            Front End Skills (Click on a skill for more information)
          </h4>
          {skillsInfo.map((skill, i) => (
            <FrontendSkills
              key={i}
              name={skill.name}
              category={skill.category}
              documentation={skill.documentation}
            />
          ))}
          <h4 className="pb-3">
            Back End Skills (Click on a skill for more information)
          </h4>
          {skillsInfo.map((skill, i) => (
            <BackendSkills
              key={i}
              name={skill.name}
              category={skill.category}
              documentation={skill.documentation}
            />
          ))}
          <h4 className="pb-3">Technical Skills</h4>
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
