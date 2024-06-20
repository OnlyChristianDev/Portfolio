
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ContactMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

return (
    <div ref={ref}>
      <div id='contact' className="contact">
        <motion.div 
          className="left"
          initial={{ opacity: 0, x: -50 }} 
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} 
          transition={{ duration: 0.5, delay: 0.3 }} 
        >
          <h1>Contact <span className='mark'>me</span></h1>
          <h2>Lets Work Together</h2>
          <p>I am liberated with the opportunity to contribute my technical skills and my passion for front-end development to you. I would love to discuss how my skills can add value to your time. Please feel free to contact me via email.
          </p>
          <div className="medias">
            <div className="gmail"> <FontAwesomeIcon className='gmailIcon' color="#5F14F3" icon={faEnvelope} />  @Christiandeveloper123@gmail.com</div>
            <div className="number"> <FontAwesomeIcon icon={faPhone} color='#5F14F3' /> +55 (87) 99115-1950 </div>
          </div>
        </motion.div>
        <motion.div 
          className="right"
          initial={{ opacity: 0, x: 50 }} 
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} 
          transition={{ duration: 0.5, delay: 0.5 }} 
        >
          <input placeholder='Enter Your Name' type="text" />
          <input placeholder='Enter Your Email' type="email" />
          <input placeholder='Enter Your Subject' type="subject" />
          <textarea placeholder='Enter Your Message' name="" id=""></textarea>
          <button className='submitButton' >Submit</button>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactMe;
