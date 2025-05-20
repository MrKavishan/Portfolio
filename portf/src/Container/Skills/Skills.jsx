import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Skills.css";

const skillsData = {
  Frontend: [
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg ", level: 90 },
    { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg ", level: 85 },
    { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg ", level: 95 },
    { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg ", level: 90 },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg ", level: 85 },
    { name: "Flutter", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg ", level: 80 },
    { name: "Dart", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg ", level: 75 },
    { name: "Java (Frontend)", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg ", level: 80 },
    { name: "C# (Frontend)", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg ", level: 75 },
  ],
  Backend: [
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg ", level: 85 },
    { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg ", level: 80 },
    { name: "Java (Backend)", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg ", level: 85 },
    { name: "C# (Backend)", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg ", level: 80 },
    { name: "ASP.NET", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg ", level: 85 },
  ],
  Database: [
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg ", level: 75 },
    { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg ", level: 70 },
    { name: "SQL Server", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg ", level: 75 },
    { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg ", level: 80 },
  ],
  Tools: [
    { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg ", level: 90 },
    { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg ", level: 95 },
    { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg ", level: 80 },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg ", level: 75 },
    { name: "Jira", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg ", level: 85 },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="skills"
    >
      {/* Decorative background animation */}
      <div className="skills-background"></div>

      <h2>
        My <span>Skills</span>
      </h2>

      {/* Category Tabs */}
      <div className="category-tabs">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
            {selectedCategory === category && (
              <motion.div
                layoutId="underline"
                className="underline"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Skills Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="skills-container-row"
        >
          {skillsData[selectedCategory].map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="skill-icon">
                <img src={skill.image} alt={skill.name} />
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-level"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Skills;