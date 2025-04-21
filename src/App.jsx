import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPart from "./components/MainPart";
import AboutMe from "./components/AboutMe";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {/* Show SplashScreen while loading */}
      {isLoading ? (
        <SplashScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            {/* Default route shows MainPart first */}
            <Route
              path="/"
              element={
                <>
                  <MainPart />
                  <AboutMe />
                  <Projects />
                  <ContactMe />
                </>
              }
            />
            {/* Skills section is separate (optional) */}
            <Route path="/skills" element={<SkillsSection />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;