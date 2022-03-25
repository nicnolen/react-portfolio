// Import dependencies
import React from 'react';
import Project from './components/Portfolio';
import About from './components/About';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <About />
      <Project />
    </div>
  );
}

export default App;
