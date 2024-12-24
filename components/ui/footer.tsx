'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-8 bg-card/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-6 h-6" />
          </motion.a>
          
          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">GitHub</span>
            <Github className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}