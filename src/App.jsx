import { useState } from 'react';
import Hero from './components/Hero';
import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certfications from './components/Certifications';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



function App() {

  return (
    <>
    <Navbar/>
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
