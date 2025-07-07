import { motion } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Terminal from './components/Terminal'
import Particles from './components/Particles'; 


function App() {
  return (
    <div className="app">
      <Particles
        particleCount={300}
        particleSpread={12}
        speed={0.2}
        particleColors={["#00ff41", "#00cc33", "#00ff4140"]} // Neon colors
        moveParticlesOnHover={true}
        particleHoverFactor={1.5}
        alphaParticles={true}
        particleBaseSize={120}
        sizeRandomness={0.8}
        cameraDistance={25}
        disableRotation={false}
        className="custom-particle-background"
        />
      <Terminal />
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
          <Footer />
        </motion.div>
      </main>
    </div>
  )
}

export default App
