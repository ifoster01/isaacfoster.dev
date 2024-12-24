'use client'

import { motion } from 'framer-motion'

export function AnimatedTitle() {
  return (
    <div className="relative">
      <motion.h1 
        className="text-4xl md:text-7xl font-bold mb-6 text-transparent"
        style={{
          backgroundImage: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Isaac Foster
      </motion.h1>
      <motion.div
        className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
    </div>
  )
}