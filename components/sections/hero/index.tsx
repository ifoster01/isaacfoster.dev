'use client'

import { motion } from 'framer-motion'
import { AnimatedText } from './animated-text'
import { GlowingDots } from './glowing-dots'
import { ScrollButton } from '@/components/client/scroll-button'
import { ChevronRight } from 'lucide-react'
import { HeroImage } from '@/components/ui/hero-image'
import { TypedText } from '@/components/ui/typed-text'

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-background mt-[-64px] pt-[64px]"
    >
      <GlowingDots />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col space-y-8">
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-primary font-medium"
            >
              Welcome to my portfolio
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block">Hi, I'm </span>
              <TypedText
                text="Isaac Foster"
                className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                delay={1.2}
              />
            </motion.h1>

            {/* Rest of the component remains the same */}