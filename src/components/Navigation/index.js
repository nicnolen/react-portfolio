import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Navbar expand='lg' bg='dark' sticky='top'>
        <Container>
          <Navbar.Brand href='/'>Nicholas Nolen</Navbar.Brand>
        </Container>

        <Container>
          <ul>
            <li>
              <NavLink to='/about'>About Me</NavLink>
            </li>
            <li>
              <NavLink to='/project'>Project</NavLink>
            </li>
          </ul>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default Navigation;
