import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div id='projects' className="projects">
      <div className="sla">

      
      <motion.h1 
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 0.5, delay: 0.3 }} 
      >
        My <span className="mark">projects.</span>
      </motion.h1>
      </div>
      <div className="list" ref={ref}>
        <div className="query">
        <motion.div
          className="works"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.0 }}
          whileHover={{ scale: "1.05" }} 
        >
          <img className="imc" src="./public/imc.png" alt="IMC Calculator" />
        </motion.div>
        <motion.div
          className="bluediv works"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.0 }}
          whileHover={{ scale: "1.05" }} 
        >
          <img className="weather" src="./public/weather.png" alt="Weather App" />
        </motion.div>
        </div>
        <motion.div
          className="quizdiv works"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.0 }}
          whileHover={{ scale: "1.05" }} 
        >
          <img className="quiz" src="./public/quiz.png" alt="Quiz App" />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
