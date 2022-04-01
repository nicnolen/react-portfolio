import React from 'react';

function Project({ title, description, image, github, deployed, tools }) {
  return (
    <div className="card mb-5">
      <figure className="img-container mb-0">
        <a href={deployed}>
          <img src={image} alt={description} className="project" />
        </a>
      </figure>
      <div className="content d-flex justify-content-between align-items-center">
        <span className="github-link">
          <a href={github} title={description}>
            <img
              src="http://nicnolen.github.io/react-portfolio/assets/images/icons/github.svg"
              alt="GitHub Repo"
            />
            <h3 className="card-title">{title}</h3>
          </a>
        </span>
        <h4 className="project-skills fs-4 pb-1 px-1">{tools}</h4>
      </div>
    </div>
  );
}

export default Project;
