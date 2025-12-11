import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './hero.css';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Mobile Applications Developer', 'Full-Stack Web Developer', 'UI/UX Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Kavishan_Hettiarachchi_CV.pdf';
    link.download = 'Kavishan_Hettiarachchi_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      {/* Dynamic Background Elements */}
      <div className="bg-grid"></div>
      <div 
        className="spotlight" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>
      
      {/* Floating Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
        
          <h1 className="hero-title">
            <span className="greeting-text">Hello, I'm</span>
            <span className="name-container">
              <span className="name-text">Kavishan</span>
              <span className="name-glow"></span>
            </span>
            <span className="name-container lastname">
              <span className="name-text">Hettiarachchi</span>
              <span className="name-glow"></span>
            </span>
          </h1>
          
          <div className="role-wrapper">
            <div className="role-box">
              <span className="role-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16a6.5 6.5 0 1 1 0-13zm0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                </svg>
              </span>
              <span className="role-text">{roles[currentRole]}</span>
            </div>
          </div>
          
          <p className="hero-description">
            Passionate about creating <span className="highlight-text">innovative digital experiences</span> that merge 
            cutting-edge technology with exceptional design. From mobile apps to web platforms, I build 
            solutions that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="cta-group">
            <button className="btn-primary" onClick={handleDownload}>
              <span className="btn-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </span>
              <span className="btn-shine"></span>
            </button>
            
            <button className="btn-secondary">
              <span className="btn-content">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Talk
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <div className="social-label">Connect with me</div>
              <div className="social-links">
      <a href="#" className="social-link" aria-label="GitHub">
        <FaGithub className="icon" />
      </a>

      <a href="#" className="social-link" aria-label="LinkedIn">
        <FaLinkedin className="icon" />
      </a>

      <a href="#" className="social-link" aria-label="Instagram">
        <FaInstagram className="icon" />
      </a>
      <a href="#" className="social-link" aria-label="Whatsapp">
        <FaWhatsapp className="icon" />
      </a>
    </div>
          </div>
        </div>

        {/* Right side */}
        <div className="hero-image-container">
          <div className="image-backdrop">
            <div className="backdrop-circle circle-1"></div>
            <div className="backdrop-circle circle-2"></div>
            <div className="backdrop-circle circle-3"></div>
          </div>
          
          <div className="image-spotlight"></div>
          
          <div className="image-wrapper">
            <div className="image-border"></div>
            <div className="image-frame">
              <img 
                src="me.png" 
                alt="Kavishan Hettiarachchi" 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}