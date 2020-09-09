import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Googlemaps from './components/Googlemaps';

import './App.css';


export default function App() {
  return (
    　　　<div>
      <CustomNavbar />
      <Home
        id="section1"
        dark={true}
      />
      <Projects
        id="section2"
        dark={false}
      />
      <About
        id="section3"
        dark={true}
      />
      <Education
        id="section4"
        dark={false}
      />
      <Contact
        id="section5"
        dark={true}
      />
      <Googlemaps 
      />
      <footer style={{ backgroundColor: "grey", textAlign: "center", color: "white" }}>Copyright © Ryota Masuzawa 2020</footer>
    </div>
  );
}


