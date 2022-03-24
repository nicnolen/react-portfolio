import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCard({ title, description, image, github, deployed, tools }) {
  return (
    <div className='card'>
      <div className='img-container'>
        <a href={deployed} title={description}>
          <img src={image} alt={description} />
        </a>
      </div>
      <div className='content'>
        <a href={github} title={description}>
          <h3 className='card-title'>{title}</h3>
          <h4>{tools}</h4>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
