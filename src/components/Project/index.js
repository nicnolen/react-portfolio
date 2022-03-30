import React from 'react';

function Project({ title, description, image, github, deployed, tools }) {
  return (
    <div className="card mb-5">
      <figure className="img-container mb-0">
        <a href={deployed}>
          <img src={image} alt={description} className="project" />
        </a>
      </figure>
      <div className="content">
        <span className="github-link">
          <a href={github} title={description}>
            <img
              src="../../assets/images/icons/github.svg"
              alt="GitHub Repo"
            />
            <h3 className="card-title">{title}</h3>
          </a>
        </span>
        <h4 className="project-skills">{tools}</h4>
      </div>
    </div>
  );
}

export default Project;
