import "./About.css";
import React from 'react';
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import chris from "/public/imgchris.png"
import pdf from "/public/curriculo christian frontend.pdf"

const About = () => {

    const [text] = useTypewriter({
        words: ["WEB DEVELOPER.", "PROGRAMMER."],
        loop: 0, 
        typeSpeed: 70,
        deleteSpeed: 50, 
        delaySpeed: 2000 
    });

    return (
        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 40 }}
            transition={{ duration: 1.0 }} 
            className="About"
        >
            <img className="chris" src={chris} alt="Chris" />
            <h4>Hi, I'm Christian &#128075;</h4>
            <div className="description">
                <h1>
                    FRONT-END <br />
                    <span className="typewriter-text">
                        {text}
                        <Cursor />
                    </span>
                </h1>
                <p>
                    I'm a <span className="mark">frontend</span> developer passionate about creating intuitive and visually appealing <span className="mark">web interfaces.</span> Combining skills in web development and <span className="mark"> UI/UX design</span>, I aim to provide unique and engaging digital experiences. 
                </p>
            </div>
           <a href={pdf} download> <button className="cv">
                Download CV <span className="space"></span><FontAwesomeIcon icon={faFile} />
            </button> </a>
            <div className="conections">
                <a target="_blank" href="https://github.com/OnlyChristianDev">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
                <a target="_blank" href="mailto:Christiandeveloper123@gmail.com">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/christiangdev/">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                </a>
            </div>
        </motion.div>
    );
}

export default About;
