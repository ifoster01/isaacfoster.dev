'use client'

import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

interface TypedTextProps {
  text: string
  className?: string
  delay?: number
}

export function TypedText({ text, className = '', delay = 0 }: TypedTextProps) {
  const [scope, animate] = useAnimate()
  
  useEffect(() => {
    // Hide text initially
    animate(scope.current, { opacity: 0 }, { duration: 0 })
    
    // Start typing animation after delay
    const typeText = async () => {
      await animate(scope.current, { opacity: 1 }, { duration: 0, delay })
      
      // Animate each character
      for (let i = 0; i <= text.length; i++) {
        await animate(
          scope.current,
          { width: `${(i / text.length) * 100}%` },
          { duration: 0.1 }
        )
      }
      
      // Add final cursor blink
      animate(
        'span',
        { opacity: [1, 0] },
        { duration: 0.8, repeat: Infinity, repeatType: 'reverse' }
      )
    }
    
    typeText()
  }, [text, animate, delay, scope])

  return (
    <div className="relative">
      <motion.div
        ref={scope}
        className={`overflow-hidden whitespace-nowrap ${className}`}
      >
        {text}
        <span className="ml-0.5 inline-block w-0.5 h-[1.1em] align-middle bg-current" />
      </motion.div>
    </div>
  )
}