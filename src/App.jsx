import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/about';
import Team from './components/Team';
import Works from './components/work';
import Contact from './components/contact';
import './App.css';
import StarsCanvas from './components/starcanvas';
import Footer from './components/fotter';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Body />
      <About />
      <Team />
      <Works/>
      <Contact/>
      <StarsCanvas />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
