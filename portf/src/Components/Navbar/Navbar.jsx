import React, { useState, useEffect } from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll event listener for Navbar animation
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Set initial state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleMenu && !event.target.closest('.navsmallscreen_overlay') && 
          !event.target.closest('.hamburger-icon')) {
        setToggleMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggleMenu]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [toggleMenu]);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About Me' },
    { id: 'projects', text: 'Projects' },
    { id: 'contact', text: 'Contact Me' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h1>Portfolio</h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="navLinks">
        {navLinks.map((link) => (
          <li key={link.id} className="links">
            <a href={`#${link.id}`} onClick={handleLinkClick}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="navsmallscreen">
        <GiHamburgerMenu
          color="#ffdb1e"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="hamburger-icon"
          aria-label="Open menu"
        />
        
        {toggleMenu && (
          <div className="navsmallscreen_overlay">
            <MdOutlineClose
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
              aria-label="Close menu"
            />
            <ul className="navLinks-smallscreen">
              {navLinks.map((link) => (
                <li key={link.id} className="links">
                  <a 
                    href={`#${link.id}`} 
                    onClick={handleLinkClick}
                    tabIndex={toggleMenu ? 0 : -1}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;