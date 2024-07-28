import React from 'react';
import './Skills.css';
import { faHtml5, faCss3Alt, faJs, faSass, faReact, faGitAlt, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import tailwindImg from "/public/img.png"

const skills = [
  { className: 'html', icon: faHtml5 },
  { className: 'css', icon: faCss3Alt },
  { className: 'js', icon: faJs },
  { className: 'sass', icon: faSass },
  { className: 'react', icon: faReact },
  { className: 'git', icon: faGitAlt },
  { className: 'node', icon: faNodeJs },
  { className: 'tailwind', icon: tailwindImg, isImage: true }
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div id='skills' className="skills">
      <div>
      <motion.h1 initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.5, delay: 0.3 }} >
        My <span className="mark">skills.</span>
      </motion.h1>
      </div>
      <div className="grid" ref={ref}>
        <div className="squares firstLine">
          {skills.slice(0, 4).map((skill, index) => (
            <motion.div
              key={index}
              className="square"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <FontAwesomeIcon className={`iconSkills ${skill.className}`} icon={skill.icon} />
            </motion.div>
          ))}
        </div>
        <div className="squares secondLine">
          {skills.slice(4).map((skill, index) => (
            <motion.div
              key={index + 4}
              className="square"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: (index + 4) * 0.3 }}
            >
              {skill.isImage ? (
                <img className={`iconSkills ${skill.className}`} src={skill.icon} alt="Tailwind CSS" />
              ) : (
                <FontAwesomeIcon className={`iconSkills ${skill.className}`} icon={skill.icon} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
