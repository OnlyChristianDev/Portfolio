
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import emaiJs from "@emailjs/browser"

const ContactMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [subject, setSubject] = useState ("")
  const [message, setMessage ] = useState ('')

  const sendEmail = (e) => {
    e.preventDefault()

     if (name == "" || email == "" || subject == "" || message == ""){
      alert ("Preencha todas informações!")
      return
     }
     const templatParams = {
      name: name,
      message: message,
      email: email
     }
     emaiJs.send("service_s6tpeob", "template_2m4qhbg", templatParams, "aGFyu7MBSgmGrQ4ee" )
     .then((response)=> {
      console.log ("email enviado", response.status, response.text)
      setName ("")
      setEmail("")
      setMessage ("")
      setSubject ("")
     }, (err) => {
      console.log ("erro", err)
     })

  }

return (
    <form onSubmit={sendEmail} ref={ref}>
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
          <input
           placeholder='Enter Your Name' 
           type="text" 
           onChange={(e) => setName (e.target.value)}
           value={name}
          />
          <input 
          placeholder='Enter Your Email' 
          type="email" 
          onChange={(e) => setEmail (e.target.value)}
          value={email}
          />
          <input 
          placeholder='Enter Your Subject' 
          type="subject"
          onChange={(e) => setSubject (e.target.value)}
          value={subject} 
          />
          <textarea 
          placeholder='Enter Your Message'
          onChange={(e) => setMessage (e.target.value)}
          value={message} 
          >
          </textarea>
          <button className='submitButton'>Submit</button>
        </motion.div>
      </div>
    </form>
  )
}

export default ContactMe;
