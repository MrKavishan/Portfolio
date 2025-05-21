import React from 'react';
import './AboutMe.css';
import { FaReact, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import Skills from '../Skills/Skills';

const AboutMe = () => {
  return (
    <div className="about-container" id="about">
      
      <div className="about-background"></div>

      
      <div className="about-content">
        <div className="about-header">
          <h1>About <span>Me</span></h1>
        </div>
        <div className="about-wrapper">
          <div className="about-text">
            <div className="intro-section">
              <p>
                I’m Kavishan Hettiarachchi, a third-year Software Engineering undergraduate at NSBM Green University. I specialize in developing dynamic and efficient software solutions, with expertise in web development, Android application development, and desktop applications. My focus is on crafting seamless and impactful digital experiences that solve real-world problems.
              </p>
            </div>
            <div className="dev-focus">
              <div className="dev-item">
                <FaReact className="dev-icon" />
                <span>Web Development</span>
              </div>
              <div className="dev-item">
                <FaMobileAlt className="dev-icon" />
                <span>Mobile App Development</span>
              </div>
              <div className="dev-item">
                <FaDesktop className="dev-icon" />
                <span>Desktop App Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="skills-section">
        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;