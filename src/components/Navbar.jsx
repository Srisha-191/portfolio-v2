import './Navbar.jsx';
const Navbar  = () => {
    return (
            <nav className="navbar">
                <div className="logo">SRISHA PORTFOLIO</div>
                <ul className="nav-links">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#projects" >PROJECT</a></li>
                    <li><a href="#resume" >RESUME</a></li>
                    <li><a href="#contact" >CONTACT</a></li> 
                 </ul>
            </nav>
        
    );
};

export default Navbar;