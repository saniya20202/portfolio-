import React from "react";
import "./ContactMe.css";
import { AiOutlineGithub, AiOutlineArrowUp } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaVoicemail } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { PiLinkedinLogo } from "react-icons/pi";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="contactPart">
      <div className="contactme">
        <h1>Contact Me</h1>
        <p>
          If you have any questions or would like to get in touch, feel free to
          reach out!
        </p>
      </div>
      <div className="contactme-form">
        <h2>GET IN TOUCH </h2>

        <form action="https://formspree.io/f/xjvjlqzj" method="POST">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Name" required />
            
          </div>
          <div className="form-group"> 
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" rows={5} placeholder="Message" required></textarea>
          </div>
          <button type="submit">Send </button>
        </form>
      
      </div>
      <button className="go-to-top" onClick={scrollToTop}>
        <AiOutlineArrowUp />
      </button>
      
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Me</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/portfolio">Portfolio</a></li> 
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact Info</h3>
              <p>Email: sandipasenadira@gmail.com</p>
              <p>Phone:+94 76 434 8334 </p>
              <p>Location: Alawwa, Kurunegala</p>
            </div>
            
            <div className="footer-section">
              <h3>Follow Me</h3>
              <div className="footer-socials">
                <a href="https://www.linkedin.com/in/sandipadeshan/" aria-label="LinkedIn"><PiLinkedinLogo /></a>
                <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://github.com/saniya20202" aria-label="GitHub"><AiOutlineGithub /></a>
                <a href="mailto:info@example.com" aria-label="Email"><SiGmail /></a>
                <a href="https://example.com" aria-label="Website"><IoIosGlobe /></a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Sandipa Senadhira. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactMe;