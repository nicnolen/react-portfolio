import React from 'react';

function TechnicalSkills({ name, category, documentation }) {
  return (
    <div>
      {category === 'technical' && (
        <ul>
          <li>{name}</li>
        </ul>
      )}
    </div>
  );
}

export default TechnicalSkills;
