import React from 'react';

function FrontendSkills({ name, category, documentation }) {
  return (
    <div>
      {category === 'frontend' && (
          <ul>
            <li>
              <a href={documentation}>{name}</a>
            </li>
          </ul>
      )}
    </div>
  );
}

export default FrontendSkills;
