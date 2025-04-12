import React from 'react';
import Navbar from './components/navbar'; 
import MainPart from './components/MainPart';  
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className='App'>
      <Navbar />     
      <MainPart /> 
      <AboutMe />   
      <SkillsSection />
      <Projects />
    </div>
  );
}

export default App;