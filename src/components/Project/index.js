import React from 'react';
import projectInfo from './projects.json';
import ProjectCard from '../ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wrapper = props => {
  return <div className='wrapper'>{props.children}</div>;
};

function Project() {
  return (
    <section className='container'>
      <div className='project'>
        <h2 className='top-title'>Professional Portfolio</h2>
        <hr></hr>
      </div>

      <Wrapper id='card-data'>
        I am the project component
        {projectInfo.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            github={project.github}
            deploy={project.deploy}
            tools={project.tools}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default Project;
