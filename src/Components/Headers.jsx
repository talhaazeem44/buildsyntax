import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from "../assets/img/WhiteFavicon.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="dashboard-header">
      <div className="logo-container" onClick={() => handleNavClick('/')}>
        <img src={Logo} alt="Build Syntax" />
        <span className="logo-text">Build Syntax</span>
      </div>
      
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {isHomePage ? (
          <>
            <Link to="home" smooth={true} duration={500}>Home</Link>
            <span onClick={() => handleNavClick('/about')}>About</span>
            <Link to="services" smooth={true} duration={500}>Services</Link>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </>
        ) : (
          <>
            <span onClick={() => handleNavClick('/')}>Home</span>
            <span onClick={() => handleNavClick('/about')}>About</span>
            <span onClick={() => handleNavClick('/')}>Services</span>
            <span onClick={() => handleNavClick('/contact')}>Contact</span>
          </>
        )}
        <button 
          className="get-started-btn"
          onClick={() => handleNavClick('/contact')}
        >
          Get Started
        </button>
      </nav>

      <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
}

export default Header;
