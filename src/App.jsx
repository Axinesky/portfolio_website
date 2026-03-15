import './App.css'
import { useState } from 'react'
import Landing from './landing.jsx'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [showHero, setShowHero] = useState(false)
  return (
    
    <>
    <AnimatePresence mode="wait">
      {showHero ? (
        <motion.div
         key="hero"
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
        >
          <div className="NavBar">
            <button className='ProjectButton'>Projects</button>
            <button className='SocialButton'>Socials</button> 
          </div>
          <div className="HeroMain"> 
            <h1 className='Title'>Hey, I'm Axine</h1>
            <h2 className='HeroBlurb'>Stumbled upon my portfolio? Scroll down to see my work!</h2>
          </div>
        </motion.div>
      ) : (
        <Landing key="landing" onFinish={() => setShowHero(true)} />
      )}
      </AnimatePresence>
    </>
    
  )
  
}

export default App 