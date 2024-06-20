import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imc from "/public/imc.png"
import quiz from "/public/quiz.png"
import weather from "/public/weather.png"


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
        <a target='_blank' href="https://imc-calculator-steel.vercel.app/"><motion.div
          className="works"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.0 }}
          whileHover={{ scale: "1.05" }}  
        > 
          <img className="imc" src={imc} alt="IMC Calculator" />
        </motion.div> </a>
        <a target='_blank' href="https://weather-project-inky-two.vercel.app/"> <motion.div
          className="bluediv works"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.0 }}
          whileHover={{ scale: "1.05" }} 
        >
          <img className="weather" src={weather} alt="Weather App" />
        </motion.div> </a>
        </div>
        <a target= "_blank" href="https://quiz-in-java-script.vercel.app/" ><motion.div
          className="quizdiv works"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.0 }}
          whileHover={{ scale: "1.05" }} 
        >
          <img className="quiz" src={quiz} alt="Quiz App" />
        </motion.div> </a>
      </div>
    </div>
  );
};

export default Projects;
