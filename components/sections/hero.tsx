'use client'

import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ScrollButton } from '@/components/client/scroll-button'
import Image from 'next/image'
import IsaacFoster from '@/public/Isaac_Foster_No_Bg.png'
import { useRef, useState, useEffect } from 'react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Mouse movement animation values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Create smooth spring animations for various effects
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), {
    stiffness: 400,
    damping: 25
  })
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), {
    stiffness: 400,
    damping: 25
  })
  const translateZ = useSpring(isHovered ? 20 : 0, {
    stiffness: 300,
    damping: 30
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((event.clientX - centerX) / rect.width)
    mouseY.set((event.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative pt-24 md:pt-8 px-4 md:px-8 pb-8 bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-[2px]">
      <motion.div 
        className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1 order-2 md:order-1 mt-4 md:mt-0">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Isaac Foster
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hey there! 👋 I bring ideas to life
          </motion.p>
          <motion.p 
            className="text-lg mb-12 max-w-2xl text-white/90 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I&apos;m passionate about creating delightful web experiences that make a real difference. Whether it&apos;s a stunning website or a powerful app, I love turning creative ideas into reality.
          </motion.p>
        </div>
        
        <motion.div 
          ref={containerRef}
          className="order-1 md:order-2 relative w-full md:w-[320px] h-[320px] perspective-[1000px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] animate-pulse" />
          
          {/* Geometric accent shapes */}
          <motion.div 
            className="absolute -top-4 -right-4 w-24 h-24 border border-emerald-500/20"
            animate={{
              rotate: isHovered ? 45 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute -bottom-4 -left-4 w-32 h-32 border border-emerald-500/10 rounded-full"
            animate={{
              scale: isHovered ? 1.2 : 1,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Main container with glass effect */}
          <motion.div 
            className="relative z-10 h-full backdrop-blur-[2px] rounded-2xl overflow-hidden"
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              translateZ,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Subtle gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent"
              animate={{
                opacity: isHovered ? 0.8 : 0.3,
              }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Image container with modern border treatment */}
            <div className="relative h-full group">
              {/* Animated border gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 opacity-0"
                animate={{
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Main image */}
              <div className="relative h-full p-[1px] backdrop-blur-sm">
                <div className="relative w-full h-full bg-background/40">
                  <Image 
                    src={IsaacFoster} 
                    alt="Isaac Foster" 
                    fill
                    priority
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center bottom',
                    }}
                    className="transition-transform duration-500"
                  />
                  
                  {/* Hover overlay effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <ScrollButton />
    </section>
  )
}