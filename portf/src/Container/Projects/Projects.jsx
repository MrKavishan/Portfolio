import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight, ArrowLeft, Code, Globe, Star } from 'lucide-react';
import './projects.css';

const projectsData = [
  {
    id: 1,
    title: "Spice Mountain",
    description: "Developed the frontend of a responsive and modern e-commerce web application using React, Framer Motion, and CSS. Includes smooth page transitions and engaging animations to enhance the user experience.",
    tags: ["React.js ", "Framer Motion", "CSS"],
    image: "/public/project images/spm.jpg",
    githubUrl: "https://github.com/MrKavishan/E-Commerce",
    liveUrl: "https://spicemountain.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "A fully responsive and interactive portfolio website built with React to showcase my web development skills, experience, and projects. It serves as my professional digital presence for clients, recruiters, and collaborators.",
    tags: ["React.js", "Framer Motion", "CSS", "Email.Js"],
    image: "/public/project images/pf.jpg",
    githubUrl: "https://github.com/MrKavishan/Portfolio",
    liveUrl: "https://myportfolio-one-liart-29.vercel.app/",
    featured: true
  },
  
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => {
      const newIndex = prev === projectsData.length - 1 ? 0 : prev + 1;
      console.log("Next clicked, newIndex:", newIndex); // Debug log
      return newIndex;
    });
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => {
      const newIndex = prev === 0 ? projectsData.length - 1 : prev - 1;
      console.log("Prev clicked, newIndex:", newIndex); // Debug log
      return newIndex;
    });
  };

  // Handle animation end to reset isAnimating
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        console.log("Animation finished, isAnimating reset to false");
      }, 600);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isAnimating]);

  const selectProject = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    console.log("Project selected, newIndex:", index); // Debug log
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollPosition * 0.1;

  return (
    <div className="projects" id='projects'>
      <div
        className="projects-background"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div className="projects-container">
        <div className="projects-header">
          <h2>My <span className="accent">Projects</span></h2>
          <div className="accent-bar"></div>
          
          <p>
          In this section, the projects showcased demonstrate my
           skills in building mobile, web, and desktop applications.
            Each project highlights my ability to design and develop 
            user-friendly, efficient, and functional software solutions.
             From responsive websites and dynamic web apps to mobile 
             applications and desktop systems, these projects reflect
              my passion for technology and my commitment to delivering high-quality results.
          </p>
        </div>

        <div className="featured-project-container">
          <div className={`featured-project ${isAnimating ? 'animating' : ''}`}>
            <div className="featured-project-overlay"></div>
            <div className="featured-project-content">
              <div className="featured-project-info">
                <div className="featured-badge">
                  <span>Featured</span>
                </div>
                <h3>{projectsData[activeIndex].title}</h3>
                <p>{projectsData[activeIndex].description}</p>
                <div className="project-tags">
                  {projectsData[activeIndex].tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={projectsData[activeIndex].githubUrl} className="github-link">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a href={projectsData[activeIndex].liveUrl} className="demo-link">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="featured-project-image-container">
                <div className="featured-project-image-wrapper">
                  <img
                    src={projectsData[activeIndex].image}
                    alt={projectsData[activeIndex].title}
                    className="featured-project-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="nav-button prev-button"
            disabled={isAnimating}
            style={{ pointerEvents: isAnimating ? 'none' : 'auto' }}
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            className="nav-button next-button"
            disabled={isAnimating}
            style={{ pointerEvents: isAnimating ? 'none' : 'auto' }}
          >
            <ArrowRight size={20} />
          </button>
        </div>

      {/* Project Thumbnails */}
<div className="project-thumbnails">
  {projectsData.map((project, index) => (
    <div
      key={project.id}
      className={`project-thumbnail ${index === activeIndex ? 'active' : ''}`}
      onClick={() => selectProject(index)}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
            {/* Thumbnail Image Container */}
            <div className="thumbnail-image-container">
                {/* Project Image */}
                <img
                src={project.image}
               
                className="thumbnail-image"
                />

                {/* Overlay on Hover */}
                <div
                className={`thumbnail-overlay ${
                    hoveredProject === project.id || index === activeIndex ? 'hovered' : ''
                }`}
                ></div>

                {/* Thumbnail Content (Header, Description, Links) */}
                <div className="thumbnail-content">
                {/* Header with Title and Featured Badge */}
                <div className="thumbnail-header">
                    <h4>{project.title}</h4>
                    {project.featured && (
                    <span className="featured-tag">Featured</span>
                    )}
                </div>

                {/* Hidden Description (Visible on Hover) */}
                <div className="thumbnail-description">
                    <p>{project.description}</p>
                </div>

                {/* Links (GitHub and Live Demo) */}
                <div className="thumbnail-links">
                    <a
                    href={project.githubUrl}
                    className="thumbnail-link github"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Github size={14} />
                    </a>
                    <a
                    href={project.liveUrl}
                    className="thumbnail-link demo"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <ExternalLink size={14} />
                    </a>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>

        
      </div>
    </div>
  );
};

export default Projects;