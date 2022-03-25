// Import dependencies
import React from 'react';
import Project from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <About />
      <Project />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
