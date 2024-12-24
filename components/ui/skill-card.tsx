'use client'

import { motion } from 'framer-motion'

interface SkillCardProps {
  title: string
  description: string
}

export function SkillCard({ title, description }: SkillCardProps) {
  // Split description by bullet points and filter out empty strings
  const sections = description.split('•').filter(Boolean).map(s => s.trim())

  return (
    <motion.div 
      className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <div className="space-y-2">
        {sections.map((section, index) => {
          const [category, items] = section.split(':').map(s => s.trim())
          return (
            <div key={index} className="text-muted-foreground">
              <span className="font-medium text-foreground">{category}:</span>
              <span className="ml-1">{items}</span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}