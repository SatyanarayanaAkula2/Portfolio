import { useState } from 'react';
import Hero from './components/Hero';
import './App.css'
import Skills from './components/Skills';
import Projects from './components/projects';
import Certfications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';


function App() {

  return (
    <>
    <Hero/>
    <Skills/>
    <Projects/>
    <Certfications/>
    <About/>
    <Contact/>
    </>
  )
}

export default App
