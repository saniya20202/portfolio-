import React from 'react';
import Navbar from './components/Navbar'; 
import MainPart from './components/MainPart';  
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <MainPart />
      <AboutMe />
      <SkillsSection />
      
      

  
      <Projects />

      <ContactMe />

      
    </div>
  );
}

export default App;