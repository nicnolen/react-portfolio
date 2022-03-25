import React from 'react';

function FrontendSkills({ name, category, documentation }) {
  return (
    <div>
      {category === 'frontend' && (
        <ul>
          <li>
            <a href={documentation} target='_blank' rel='noreferrer'>
              {name}
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default FrontendSkills;
