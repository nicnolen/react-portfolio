import React from 'react';

function Skills({ name, category, documentation }) {
  return (
    <div>
      {category === 'frontend' && (
        <React.Fragment>
          <h3>Front End Skills</h3>
          <ul>
            <li>
              <a href={documentation}>{name}</a>
            </li>
          </ul>
        </React.Fragment>
      )}
      {category === 'backend' && (
        <React.Fragment>
          <h3>Back End Skills</h3>
          <ul>
            <li>
              <a href={documentation}>{name}</a>
            </li>
          </ul>
        </React.Fragment>
      )}
      {category === 'technical' && (
        <React.Fragment>
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <a href={documentation}>{name}</a>
            </li>
          </ul>
        </React.Fragment>
      )}
    </div>
  );
}

export default Skills;
