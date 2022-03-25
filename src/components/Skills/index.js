import React from 'react';

function Skills({ name, category, documentation }) {
  return (
    <span>
      <h3>Front End Skills</h3>
      <ul>
        <li>
          <a href={documentation}>{name}</a>
        </li>
      </ul>
      <h3>Back End Skills</h3>
      <ul>
      
      </ul>
      <h3>Technical Skills</h3>
      <ul>
       
      </ul>
    </span>
  );
}

export default Skills;
