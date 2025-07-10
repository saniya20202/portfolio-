// src/components/Projects.jsx
import React, { useState } from 'react';
import './Projects.css';
// Import icons for programming languages
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDatabase, 
  FaServer, FaCode, FaGithub,
  FaJava
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase, SiExpress, SiTailwindcss, SiBootstrap, SiChartdotjs, SiStripe, SiPython } from 'react-icons/si';

const Projects = () => {
  // Technology icons mapping
  const techIcons = {
    "React": <FaReact />,
    "Node.js": <FaNodeJs />,
    "JavaScript": <FaJs />,
    "HTML5": <FaHtml5 />,
    "CSS3": <FaCss3Alt />,
    "MongoDB": <SiMongodb />,
    "Express": <SiExpress />,
    "Tailwind CSS": <SiTailwindcss />,
    "Bootstrap": <SiBootstrap />,
    "Python": <SiPython />,
    "Java": <FaJava />,
  };


  const [projects] = useState([
    {
      id: 1,
      title: "Real Time Ticketing System",
      description: "A real-time ticketing simulator featuring a Java-based CLI for core operations and a frontend-backend system for user interactions. Designed to provide fast and efficient ticket processing, it accurately simulates real-world ticketing scenarios with real-time updates. ",
      technologies: ["Java", "React", "Node.js"],
      image: "/images/project1.jpg",
      codeLink: "https://github.com/saniya20202/Real-Time-Ticketing-System"
    },
    {
      id: 2,
      title: "Cinema Management System",
      description: "Designed and implemented a Java-based cinema management system to handle ticket booking, seating arrangements, and movie scheduling. The system enabled users to view available seats, select preferred seats, and complete bookings seamlessly.",
      technologies: ["Java"],
      image: "/images/project2.jpg", 
      codeLink: "https://github.com/saniya20202/Cinema-Ticket-Management-System-"
    },
    {
      id: 3,
      title: "Ceylon Property Finder- Property Sell and Rent Web Site",
      description: "A React-based property listing platform for searching, filtering, and saving real estate in Sri Lanka. Features include advanced search, favorites managemen twith local storage, and drag-and-drop functionality for organizing saved properties.",
      technologies: ["React"],
      image: "/images/project3.jpg", 
      codeLink: "https://github.com/saniya20202/ceylon-property-finder"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Developed a responsive and visually appealing personal portfolio website using HTML5 and CSS3. Showcased projects, skills, and contact information with a modern layout, smooth navigation, and interactive styling effects. Ensuredcompatibility across various devices and browsers.",
      technologies: ["HTML5", "CSS3"],
      image: "/images/project4.jpg", 
      codeLink: "https://github.com/yourusername/project4"
    },
    {
      id: 5,
      title: "PredicTea-AI-Powered Tea Price Prediction",
      description: "Developed an AI-driven web platform that predicts tea prices based on key indicators such as global demand, local weather conditions, currency exchange rates, and geopolitical factors. The platform provides real-time insights to assist farmers, exporters, and traders in making informed decisions..",
      technologies: ["React", "Node.js", "Python", "MongoDB"],
      image: "/images/project5.jpg", 
      codeLink: "https://github.com/Sanukadg/predic-tea"
    },
    {
      id: 1,
      title: "Portfolio Website",
      description: "Developed a responsive and visually appealing personal portfolio website using React. Showcased projects, skills, and contact information with a modern layout, smooth navigation, and interactive styling effects. Ensuredcompatibility across various devices and browsers. ",
      technologies: [ "React", "Tailwind CSS"],
      image: "/images/project6.jpg", 
      codeLink: "https://github.com/yourusername/project"
    },
  ]);

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                onError={(e) => {
                  e.target.onerror = null;
                }}
              />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="tech-tag">
                    <span className="tech-icon">
                      {techIcons[tech] || <FaCode />}
                    </span>
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
              
              <div className="project-links">
                
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link code">
                  <FaGithub /> 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;