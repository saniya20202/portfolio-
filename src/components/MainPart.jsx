import React from 'react';
import "./MainPart.css";
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { PiLinkedinLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";


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
                <h3>Sendipa Senadhira</h3> 
   
            </div>

            <div className="job-title">
            <h4>{text}
                <Cursor cursorBlinking={true} cursorStyle='|' cursorColor='white' /></h4>
            </div>

         <div className="socials">
           <div className="icon-wrapper"><PiLinkedinLogo /></div>
           <div className="icon-wrapper"><FaInstagram /></div>
           <div className="icon-wrapper"><AiOutlineGithub /></div>
           <div className="icon-wrapper"><IoIosGlobe /></div>
         </div>


            
        </div>

    );
};

export default MainPart;


