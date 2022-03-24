import React from 'react';
import projectInfo from './projects.json';
import Project from '../Project';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = props => {
  return <div className='wrapper'>{props.children}</div>;
};

function Portfolio() {
  return (
    <section className='container'>
      <div className='project'>
        <h2 className='top-title'>Professional Portfolio</h2>
        <hr></hr>
      </div>

      <Wrapper id='card-data'>
        {projectInfo.map(project => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            github={project.github}
            deployed={project.deployed}
            tools={project.tools}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Portfolio;
