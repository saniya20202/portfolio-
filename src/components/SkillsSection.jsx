// src/components/SkillsSection.jsx
import React, { useState, useEffect } from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const skills = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain', proficiency: 85 },
    { name: 'React', icon: 'devicon-react-original', proficiency: 80 },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', proficiency: 75 },
    { name: 'HTML5', icon: 'devicon-html5-plain', proficiency: 90 },
    { name: 'CSS3', icon: 'devicon-css3-plain', proficiency: 85 },
    { name: 'Python', icon: 'devicon-python-plain', proficiency: 70 },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', proficiency: 65 },
    { name: 'Git', icon: 'devicon-git-plain', proficiency: 80 },
    { name: 'Java', icon: 'devicon-java-plain', proficiency: 75 },
    { name: 'C#', icon: 'devicon-csharp-plain', proficiency: 70 },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', proficiency: 85 },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain', proficiency: 90 },
    { name: 'PHP', icon: 'devicon-php-plain', proficiency: 65 },
    { name: '.NET', icon: 'devicon-dot-net-plain', proficiency: 70 },
    { name: 'MySQL', icon: 'devicon-mysql-plain', proficiency: 80 },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', proficiency: 75 },
    { name: 'Figma', icon: 'devicon-figma-plain', proficiency: 85 }
  ];
  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setActiveSkill(prev => (prev === 0 ? skills.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 500);
  };
    // Function to handle next button click
    const handleNext = () => {
        if (animating) return;
        setAnimating(true);
        setActiveSkill(prev => (prev === skills.length - 1 ? 0 : prev + 1));
        setTimeout(() => setAnimating(false), 500);
      };