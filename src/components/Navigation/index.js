import React, { useEffect } from 'react';

function Navigation(props) {
  const { 
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  const categorySelected = name => {
    console.info(`${name} selected`);
    return name;
  }

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  
  return (  );
}

export default Navigation;