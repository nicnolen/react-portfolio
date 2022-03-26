import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../../assets/css/Navigation.css'

function Navigation() {
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
            <li class='nav-item'>
              <NavLink to='/about'>
                <span class='text-light nav-font'>About Me</span>
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to='/project'>
                <span class='text-light nav-font'>Projects</span>
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to='/contact'>
                <span class='text-light nav-font'>Contact</span>
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink to='/resume'>
                <span class='text-light nav-font'>Resume</span>
              </NavLink>
            </li>
          </ul>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Navigation;
