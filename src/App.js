// Import dependencies
import React from 'react';
import Project from './components/Portfolio';
import About from './components/About';
import Navigation from './components/Navigation';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
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
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
