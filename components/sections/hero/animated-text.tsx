'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const words = ["Developer", "Designer", "Creator"]

export function AnimatedText() {
  const [index, setIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-[40px] overflow-hidden">
      <motion.div
        key={words[index]}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
      >
        {words[index]}
      </motion.div>
    </div>
  )
}