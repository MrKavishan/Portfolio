import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight, ArrowLeft, Code, Globe, Star } from 'lucide-react';
import './projects.css';

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with admin dashboard, payment processing, and real-time inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    image: "/public/taa.png",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An application that leverages AI to generate marketing content, blog posts, and social media captions.",
    tags: ["Next.js", "OpenAI API", "TypeScript", "TailwindCSS"],
    image: "/images/projects/ai-generator.jpg",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "A messaging platform with real-time notifications, file sharing, and end-to-end encryption.",
    tags: ["React", "Socket.io", "Firebase", "Express"],
    image: "/images/projects/chat-app.jpg",
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Portfolio Dashboard",
    description: "An interactive dashboard for tracking investment portfolios with data visualization and market updates.",
    tags: ["Vue.js", "D3.js", "AWS", "Vuex"],
    image: "/images/projects/dashboard.jpg",
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  }
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
            Explore my latest work that showcases my expertise in web development,
            from responsive design to complex full-stack applications.
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


        
      </div>
    </div>
  );
};

export default Projects;