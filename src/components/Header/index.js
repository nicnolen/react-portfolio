import React, { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Project from '../Portfolio';
import About from '../About';
import Navigation from '../Navigation';
import Resume from '../Resume';
import Contact from '../Contact';

function Header() {
  // conditionally render the Contact component
  const [aboutSelected, setAboutSelected] = useState(true);
  // set categories
  const [categories] = useState([
    {
      name: 'project',
      description:
        'Listed out my top six projects with links to the deployed link and the GitHub link',
    },
    {
      name: 'contact',
      description: 'Form to contact me',
    },
    {
      name: 'resume',
      description:
        'Link to download my resume as well as a list of my skills with links to the documentation for the front end and back end skills',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <header>
      <HashRouter>
        <nav>
          <Navigation
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
          />
        </nav>

        <div>
          <Routes>
            <Route exact path='/' element={<About />} />
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
