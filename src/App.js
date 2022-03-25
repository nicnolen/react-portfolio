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

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
