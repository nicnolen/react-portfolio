import React, { useEffect } from 'react';
import '../../assets/css/Navigation.css';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    aboutSelected,
    setAboutSelected,
  } = props;

  const categorySelected = name => {
    console.info(`${name} selected`);
    return name;
  };

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  });
  return (
      <Navbar expand='lg' bg='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='/'>
            <h1 className='text-light nav-title-font'>Nicholas Nolen</h1>
          </Navbar.Brand>
        </Container>

        <Container>
          <ul className='navbar-nav ml-auto navitem-indent'>
            <li className='mx-2 nav-item'>
              <NavLink
                className={`navLink ${aboutSelected && 'navActive'}`}
                to='/about'
                onClick={() => {
                  categorySelected('About Me');
                  setAboutSelected(true);
                }}>
                <span>About Me</span>
              </NavLink>
            </li>
            {categories.map(category => (
              // whenever you map over anything in JSX the outmost element must have a key attribute set to something unique
              <li className='mx-1 nav-item' key={category.name}>
                <NavLink
                  className={`navLink ${
                    currentCategory.name === category.name &&
                    !aboutSelected &&
                    'navActive'
                  }`}
                  to={`/${category.name}`}>
                  <span
                    onClick={() => {
                      setCurrentCategory(category);
                      categorySelected(category.name);
                      setAboutSelected(false);
                    }}>
                    {capitalizeFirstLetter(category.name)}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </Navbar>
  );
}

export default Navigation;
