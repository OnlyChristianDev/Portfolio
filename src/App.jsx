import './App.css'
import Home from './assets/Home/Home'
import About from './assets/About/About.jsx'
import Skills from './assets/Skills/Skills.jsx'
import Projects from './assets/Projects/Projects.jsx'
import CotactMe from './assets/ContactMe/CotactMe.jsx'

function App(){
  return(
    <div className='App'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <CotactMe />
    </div>
  )
}

export default App
