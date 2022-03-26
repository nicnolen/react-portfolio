import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Project from '../Portfolio';
import About from '../About';
import Navigation from '../Navigation';
import Resume from '../Resume';
import Contact from '../Contact';

function Header() {
  return (
    <header>
      <HashRouter>
        <nav>
          <Navigation />
        </nav>

        <div>
          <Routes>
            <Route exact path='/' render={() => <Navigate to='/about' />} />
            <Route path='/about' element={<About />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/resume' element={<Resume />}></Route>
          </Routes>
        </div>
      </HashRouter>
      <div>
        <About />
        <Project />
        <Resume />
        <Contact />
      </div>
    </header>
  );
}

export default Header;
