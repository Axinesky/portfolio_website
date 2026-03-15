import quotes from './quotes.js'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Landing({ onFinish }) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const [quote] = useState(() => {
    const i = Math.floor(Math.random() * quotes.length)
    return quotes[i]
  })

  useEffect(() => {
    if (index >= quote.length) {
      setTimeout(() => onFinish(), 150)
      return
    }

    const interval = setInterval(() => {
      setDisplayedText(prev => prev + quote[index])
      setIndex(prev => prev + 1)
    }, 100)

    return () => clearInterval(interval)
  }, [index])

  return (
    <>
      <div className="Landing">
        <motion.p className="QuoteText"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -50 }}
        >{displayedText}</motion.p>
      </div>
    </>  
  )
}

export default Landing