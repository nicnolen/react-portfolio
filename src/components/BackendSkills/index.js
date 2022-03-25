import React from 'react';
function BackendSkills({ name, category, documentation }) {
  return (
    <div>
      {category === 'backend' && (
          <ul>
            <li>
              <a href={documentation}>{name}</a>
            </li>
          </ul>
      )}{' '}
    </div>
  );
}

export default BackendSkills;
