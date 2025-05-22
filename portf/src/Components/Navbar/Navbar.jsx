import React from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  // Scroll event listener for Navbar animation
  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">

      <div className="logo">
        <h1>Portfolio</h1>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="navLinks">
        <li className="links">
          <a href="#home">Home</a>
        </li>
        <li className="links">
          <a href="#about">About Me</a>
        </li>
        <li className="links">
          <a href="#projects">Projects</a>
        </li>
        <li className="links">
          <a href="#contact">Contact Me</a>
        </li>
      </ul>

      {/* Mobile Hamburger Menu */}
      <div className="navsmallscreen">
        <GiHamburgerMenu
          color="#ffdb1e"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="hamburger-icon"
        />
        {toggleMenu && (
          <div className="navsmallscreen_overlay">
            <MdOutlineClose
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navLinks-smallscreen">
              <li className="links">
                <a href="#home">Home</a>
              </li>
              <li className="links">
                <a href="#about">About Me</a>
              </li>
              <li className="links">
                <a href="#projects">Projects</a>
              </li>
              <li className="links">
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;