import React from 'react';
import "./MainPart.css";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { PiLinkedinLogo } from "react-icons/pi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import { SiGmail } from "react-icons/si";


const MainPart = () => {
    const [text] = useTypewriter({
        words: ['Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer','Software Developer','Web Developer'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 80,
        
    });
    return (
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
    <a href="https://yourwebsite.com/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
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

    );
};

export default MainPart;


