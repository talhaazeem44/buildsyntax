import React from 'react';
import { Link } from 'react-scroll'; // smooth scroll to sections
import Logo from "../assets/img/WhiteFavicon.svg"
function Header() {
  return (
    
    <header className="dashboard-header">
      <img src={Logo} height={100} width={100}/>
      <nav className="nav-links">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="services" smooth={true} duration={500}>Services</Link>
        <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
