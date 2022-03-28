import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../assets/css/Navigation.css';

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
    <div>
      <Navbar expand='lg' bg='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='/'>
            <h1 class='text-light nav-title-font'>Nicholas Nolen</h1>
          </Navbar.Brand>
        </Container>

        <Container>
          <ul class='navbar-nav ml-auto navitem-indent'>
            <li class={`mx-2 nav-item ${aboutSelected && 'navActive'}`}>
              <NavLink
                to='/about'
                onClick={() => {
                  categorySelected('About Me');
                  setAboutSelected(true);
                }}>
                <span class='text-light nav-font'>About Me</span>
              </NavLink>
            </li>
            {categories.map(category => (
              // whenever you map over anything in JSX the outmost element must have a key attribute set to something unique
              <li
                className={`mx-1 'nav-item' ${
                  currentCategory.name === category.name &&
                  !aboutSelected &&
                  'navActive'
                }`}
                key={category.name}>
                <NavLink to={`/${category.name}`}>
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
      <br />
    </div>
  );
}

export default Navigation;
