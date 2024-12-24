'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

export function GlowingDots() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)

  // Generate random positions once and reuse them
  const randomPositions = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      x1: Math.random(),
      x2: Math.random(),
      y1: Math.random(),
      y2: Math.random(),
      duration: Math.random() * 10 + 20
    }))
  }, [])

  useEffect(() => {
    setMounted(true)
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Update dimensions on resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted || dimensions.width === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {randomPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-green-500/30 blur-sm"
          initial={{
            x: pos.x1 * dimensions.width,
            y: pos.y1 * dimensions.height,
          }}
          animate={{
            x: [
              pos.x1 * dimensions.width,
              pos.x2 * dimensions.width,
            ],
            y: [
              pos.y1 * dimensions.height,
              pos.y2 * dimensions.height,
            ],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}