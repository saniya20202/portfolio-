import React, { useState, useEffect } from 'react';
import "./MainPart.css";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { PiLinkedinLogo } from "react-icons/pi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import profileImage from './profile.jpg'; // Import your image file

const MainPart = () => {
    
    const [text] = useTypewriter({
        words: ['Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer','Software Developer','Web Developer','Freelancer','Undergraduate Student'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 80,
    });
    
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    
    // Mouse parallax effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    
    // Calculate parallax effect for image
    const calculateTransform = () => {
        if (!isHovering) return '';
        
        const moveX = (mousePosition.x / window.innerWidth - 0.5) * 20;
        const moveY = (mousePosition.y / window.innerHeight - 0.5) * 20;
        
        return `translate(${moveX}px, ${moveY}px)`;
    };
    
    return (
        
        <div className='main-container'>
            
            <div className='mainpart'>
                <div className="welcomeNote">
                    <h4>Hi i am, </h4>
                </div>   

                <div className="name">
                    <h3>Sandipa Senadhira</h3> 
                </div>

                <div className="job-title">
                    <h4>{text}
                        <Cursor cursorBlinking={true} cursorStyle='|' cursorColor='white' /></h4>
                </div>
                
                <div className="socials">
                    <a href="https://www.linkedin.com/in/sandipadeshan/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                        <PiLinkedinLogo />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/saniya20202" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                        <AiOutlineGithub />
                    </a>
                    <a href="https://sandipasenadhira.netlify.app/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                        <IoIosGlobe />
                    </a>
                    <a href="mailto:your-sandipasenadhira@gmail.com" className="icon-wrapper">
                        <SiGmail />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
                        <FaFacebook />
                    </a>
                </div>

                <button className='btn1'>Hire me </button>
                <button className='btn3'>Download CV</button>
            </div>
            
            {/* Enhanced Profile Image Container with new effects */}
            <div className="profile-image-container">
                <div 
                    className="profile-image-wrapper"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    style={{ transform: calculateTransform() }}
                >
                    <img 
                        src={profileImage} 
                        alt="Sandipa Senadhira" 
                        className="profile-image"
                    />
                    <div className="profile-image-border"></div>
                    <div className="profile-image-glow"></div>
                    <div className="profile-image-glow-outer"></div>
                </div>
                
                {/* Circling dots */}
                <div className="circling-dot dot-1"></div>
                <div className="circling-dot dot-2"></div>
                <div className="circling-dot dot-3"></div>
                
                {/* Water drop particles */}
                <div className="profile-image-particles">
                    {/* Large particles */}
                    <div className="particle particle-large particle-1"></div>
                    <div className="particle particle-large particle-5"></div>
                    <div className="particle particle-large particle-9"></div>
                    
                    {/* Medium particles */}
                    <div className="particle particle-medium particle-2"></div>
                    <div className="particle particle-medium particle-4"></div>
                    <div className="particle particle-medium particle-7"></div>
                    <div className="particle particle-medium particle-10"></div>
                    
                    {/* Small particles */}
                    <div className="particle particle-small particle-3"></div>
                    <div className="particle particle-small particle-6"></div>
                    <div className="particle particle-small particle-8"></div>
                    <div className="particle particle-small particle-11"></div>
                    <div className="particle particle-small particle-12"></div>
                    
                    {/* Water splash effects */}
                    <div className="splash splash-1"></div>
                    <div className="splash splash-2"></div>
                    <div className="splash splash-3"></div>
                    <div className="splash splash-4"></div>
                </div>
            </div>
        </div>
    );
};

export default MainPart;