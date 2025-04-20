// src/components/SplashScreen.jsx
import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onLoadingComplete }) => {
  const [text, setText] = useState('');
  const [nameVisible, setNameVisible] = useState(false);
  const fullText = "Welcome to My Portfolio";
  
  // Typewriter effect
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setNameVisible(true), 500);
    }
  }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="typewriter">{text}<span className="cursor">|</span></h1>
        
        {/* Circular lines container */}
        <div className="circle-lines-container">
          {/* Profile image */}
          <div className="profile-image">
            <img src="/images/profile.jpg" alt="Profile" />
          </div>
          
          {/* Circular lines */}
          <div className="circle-line circle-line-1"></div>
          <div className="circle-line circle-line-2"></div>
          <div className="circle-line circle-line-3"></div>
        </div>

        {/* Animated name */}
        <div className={`name-container ${nameVisible ? 'visible' : ''}`}>
          <h2 className="name1">SANDIPA SENADHIRA</h2>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;