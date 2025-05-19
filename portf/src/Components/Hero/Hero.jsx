import './hero.css';
import { BsInstagram, BsLinkedin, BsGithub, BsDownload } from 'react-icons/bs';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Mobile Application Developer', 'Desktop Application Developer'],
    loop: true,
    delaySpeed: 2000
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Kavishan Hettiarachchi CV.pdf';
    link.download = 'Kavishan Hettiarachchi CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="subtitle">Hey There,</h3>
        <h1 className="title">I'm Kavishan Hettiarachchi</h1>
        <h3 className="typewriter">
          I'm a <span>{text}</span>
          <Cursor cursorStyle="_" />
        </h3>
        <p className="description">
          I specialize in building sleek and functional websites, mobile apps, and desktop applications that solve real-world problems. With a focus on clean code and intuitive design, I turn ideas into reality.
        </p>
        <div className="socials">
          <a href="#" aria-label="GitHub"><BsGithub /></a>
          <a href="#" aria-label="LinkedIn"><BsLinkedin /></a>
          <a href="#" aria-label="Instagram"><BsInstagram /></a>
        </div>
        <button className="download-btn" onClick={handleDownload}>
          <BsDownload /> Download CV
        </button>
      </motion.div>

      <motion.div 
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src="taa.png" alt="Profile" />
      </motion.div>
    </section>
  );
};

export default Hero;