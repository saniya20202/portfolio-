import React, { useState } from 'react';
import Navbar from './components/Navbar'; 
import MainPart from './components/MainPart';  
import AboutMe from './components/AboutMe';
import SkillsSection from './components/SkillsSection';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import SplashScreen from './components/SplashScreen'; // Import the new component



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='App'>
      {/* Show splash screen while loading */}
      {isLoading && <SplashScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      {/* Main app content - hidden while splash is showing */}
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <Navbar />
        <MainPart />
        <AboutMe />
        <SkillsSection />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;