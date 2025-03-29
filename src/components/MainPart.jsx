import React from 'react';
import "./MainPart.css";
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const MainPart = () => {
    const [text] = useTypewriter({
        words: ['Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX Designer','Software Developer','Web Developer'],
        loop: 0,
        typeSpeed: 70,
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
                <Cursor cursorBlinking={true} cursorStyle='|' cursorColor='green' /></h4>
            </div>
        </div>
    );
};

export default MainPart;