import "./Home.css";
import React from 'react';
import { motion } from "framer-motion";
import { animateScroll as scroll } from 'react-scroll';

function HomeComponent() {
    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        let offset = 110; 

        if (section === 'skills') {
            offset = 70;
        } else if (section === 'contact'){
            offset = 70;
        }
        
        const position = element.offsetTop - offset;

        scroll.scrollTo(position, {
            duration: 500,
            smooth: true,
        });
    };

    return (
        <motion.header initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}>
            <ul>
                <li onClick={() => scrollToSection('skills')}>Skills</li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
        </motion.header>
    );
}

export default HomeComponent;

