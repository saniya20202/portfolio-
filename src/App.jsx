import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPart from "./components/MainPart";
import AboutMe from "./components/AboutMe";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import SplashScreen from "./components/SplashScreen";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // Force scroll to top when component mounts, with a slight delay
    if (!hash) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    } else {
      const element = document.getElementById(hash.substring(1));
      setTimeout(() => {
        element?.scrollIntoView();
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Force scroll to top when loading completes
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" // Use "instant" instead of smooth for initial load
      });
    }
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading ? (
        <SplashScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <div id="home">
                      <MainPart />
                    </div>
                    <div id="about">
                      <AboutMe />
                    </div>
                    <div id="skills">
                      <SkillsSection />
                    </div>
                    <div id="projects">
                      <Projects />
                    </div>
                    <div id="contact">
                      <ContactMe />
                    </div>
                  </>
                }
              />
            </Routes>
          </main>
        </Router>
      )}
    </div>
  );
};

export default App;