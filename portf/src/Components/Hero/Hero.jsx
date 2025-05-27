import './hero.css';
import { BsInstagram, BsLinkedin, BsGithub, BsDownload } from 'react-icons/bs';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Mobile Applications Developer', 'Web Developer', 'Desktop Applications Developer'],
    loop: true,
    delaySpeed: 2000,
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
      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Subtitle Animation */}
        <motion.h3
          className="subtitle"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Hey There,
        </motion.h3>

        {/* Title Animation */}
        <motion.h1
          className="title"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I'm Kavishan Hettiarachchi
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.h3
          className="typewriter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I'm a  <span>{text}</span>
          <Cursor cursorStyle="_" />
        </motion.h3>

        {/* Description Animation */}
        <motion.p
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          I specialize in building sleek and functional websites, mobile apps, and desktop applications that solve real-world problems. With a focus on clean code and intuitive design, I turn ideas into reality.
        </motion.p>

        {/* Social Icons Animation */}
        <motion.div
          className="socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="#" aria-label="GitHub">
            <BsGithub />
          </a>
          <a href="#" aria-label="LinkedIn">
            <BsLinkedin />
          </a>
          <a href="#" aria-label="Instagram">
            <BsInstagram />
          </a>
        </motion.div>

        {/* Download Button Animation */}
        <motion.button
          className="download-btn"
          onClick={handleDownload}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <BsDownload /> Download CV
        </motion.button>
      </motion.div>

      {/* Hero Image Animation */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src="/taa.png" alt="Profile" />
      </motion.div>
    </section>
  );
};

export default Hero;