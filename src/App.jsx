import React from 'react';
import Navbar from './components/navbar'; 
import MainPart from './components/MainPart';  
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';


const App = () => {
  return (
    <div className='App'>
      <Navbar />     
      <MainPart /> 
      <AboutMe />   
      <SkillsSection />
      
    </div>
  );
}

export default App;