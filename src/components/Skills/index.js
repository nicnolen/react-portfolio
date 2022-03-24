import React, {useState} from 'react';

function Skills() {
  const [skills] = useState([
    {
      name: 'Git Bash',
      category: 'front-end',
      documentation: 'https://git-scm.com/docs',
    },
  ]);
  return (
    <span>
      <h3>Front End Skills</h3>
      <p></p>
    </span>
  );
}

export default Skills;
