import "./AboutMe.css";
  // Import the image correctly

const AboutMe = () => {
    return (
        <div className="aboutme">
            <div className="aboutmeimg">
                <img src={aboutme} alt="About Me" />  {/* Use imported image here */}
            </div>

            <div className="aboutme-content">
                <h1>About Me</h1>
                <p>
                    I am Sandipa Deshan, an ambitious and dedicated undergraduate Computer
                    Science student at the University of Westminster, specializing in software
                    development and web technologies. Passionate about technology and problem-solving, 
                    I have gained practical experience through developing various projects, including 
                    portfolio websites, ticket management systems, and cinema management applications 
                    using technologies such as Java, React, Node.js, HTML5, and CSS3.
                    <br /><br />
                    I am proficient in both frontend and backend development, with a strong foundation 
                    in databases and modern tools like Git, Figma, and MySQL Workbench. Eager to apply 
                    my skills in real-world scenarios, I am committed to continuous learning and growth 
                    in the IT industry. My goal is to contribute effectively to innovative and impactful 
                    projects, while building a robust foundation for a successful and dynamic career 
                    in technology.


                </p>
                <button className='btn2'>Download CV</button>
            </div>
        </div>
    );
}

export default AboutMe;
