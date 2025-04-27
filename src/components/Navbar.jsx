import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Add scroll event listener to detect when user scrolls
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <input 
                type="checkbox" 
                id="menu-toggle" 
                checked={menuOpen}
                onChange={toggleMenu}
            />
            <label htmlFor="menu-toggle" className="menu-btn">☰</label>
            <nav className={scrolled ? "scrolled" : ""}>    
                <ul className={menuOpen ? "menu-open" : ""}>
                    <li className="close-menu-container">
                        <button className="close-menu-btn" onClick={toggleMenu}>✕</button>
                    </li>
                    <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About me</a></li>
                    <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>     
                    <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>   
                    <li><a href="#contact" onClick={toggleMenu}>Contact Me</a></li>         
                </ul>
                
                {/* Logo with image and name */}
                <div className="logo">
                    <a href="#home" className="logo-link">
                        <span className="logo-name">SANDIPA</span>
                        <img src="images/image.png" alt="SANDIPA" className="logo-img" />
                        <div className="logo-circle">
                            <img src="images/image.png" alt="S" className="logo-circle-img" />
                        </div>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;