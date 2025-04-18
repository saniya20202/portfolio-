import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-btn">☰</label>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="AboutMe.jsx">About me</a></li>
                    <li><a href="#">Skills</a></li>     
                    <li><a href="#">Projects</a></li>   
                    <li><a href="#">Contact Me</a></li>         
                </ul>
                <div className="profile">
                    <h4>Profile</h4>               
                </div>
            </nav>
        </>
    );
};

export default Navbar;