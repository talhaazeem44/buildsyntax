import React from 'react';
import { Link } from 'react-scroll'; // smooth scroll to sections

function Header() {
  return (
    <header className="dashboard-header">
      <h1 className="">Build Syntax</h1>
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
