'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Parallax } from 'react-parallax'
import { ScrollButton } from '@/components/client/scroll-button'
import Image from 'next/image'
import IsaacFoster from '@/public/Isaac_Foster_No_Bg.png'
import { useRef } from 'react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Mouse movement animation values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth spring physics for natural movement
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 30
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 30
  })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    mouseX.set((event.clientX - centerX) / rect.width)
    mouseY.set((event.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    // Reset to default position
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <Parallax
      blur={0}
      bgImage="/images/hero-bg.jpg"
      strength={200}
      className="min-h-screen"
    >
      <section className="min-h-screen flex flex-col justify-center items-center relative p-8 bg-gradient-to-br from-background/50 to-muted/50 backdrop-blur-[2px]">
        <motion.div 
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 order-2 md:order-1">
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
              I'm passionate about creating delightful web experiences that make a real difference. Whether it's a stunning website or a powerful app, I love turning creative ideas into reality.
            </motion.p>
          </div>
          
          <motion.div 
            ref={containerRef}
            className="order-1 md:order-2 relative w-full md:w-[300px] h-[300px] perspective-[1000px] transform-gpu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full blur-2xl transform -rotate-12 scale-110" />
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-600/10 to-green-600/10 rounded-[60%] blur-3xl transform rotate-45" />
            
            <motion.div 
              className="relative z-10 h-full"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/30 blur-xl rounded-full transform-gpu scale-x-110" />
              
              <div className="relative h-full transform-gpu hover:scale-105 transition-transform duration-700">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full blur opacity-70" />
                <div className="relative bg-background/10 backdrop-blur-sm rounded-full p-2 h-full overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image 
                      src={IsaacFoster} 
                      alt="Isaac Foster" 
                      fill
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'center bottom',
                        filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.15)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.2))',
                        transform: "translateZ(20px)",
                      }}
                      className="transform transition-all duration-700 hover:rotate-2"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <ScrollButton />
      </section>
    </Parallax>
  )
}