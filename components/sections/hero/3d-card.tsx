'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export function Card3D() {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]), {
    damping: 30,
    stiffness: 300,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]), {
    damping: 30,
    stiffness: 300,
  })

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    mouseX.set((clientX - left - width / 2) / width)
    mouseY.set((clientY - top - height / 2) / height)
  }

  return (
    <motion.div
      className="relative perspective-2000"
      onMouseMove={onMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
    >
      <motion.div
        className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-1 cursor-pointer backdrop-blur-sm"
        style={{ rotateX, rotateY }}
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden bg-background/50">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=512&h=512&q=80"
            alt="Isaac Foster"
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  )
}