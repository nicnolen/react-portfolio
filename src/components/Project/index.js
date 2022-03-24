import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Project({ title, description, image, github, deployed, tools }) {
  return (
    <div className='card'>
      <div className='img-container'>
        <a href={deployed}>
          <img src={image} alt={description} width='150' height='70' />
        </a>
      </div>
      <div className='content'>
        <a href={github} title={description}>
          <img
            src='../../assets/images/projectImages/github.png'
            alt='GitHub Repo'
          />
          <h3 className='card-title'>{title}</h3>
        </a>
        <h4>{tools}</h4>
      </div>
    </div>
  );
}

export default Project;
