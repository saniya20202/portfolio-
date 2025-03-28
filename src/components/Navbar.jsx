import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>     
                <li><a href="#">Contact</a></li>            
            </ul>
            <div className="profile">
                <h4>Profile</h4>               
            </div>
        </nav>
    )
}

export default Navbar;
