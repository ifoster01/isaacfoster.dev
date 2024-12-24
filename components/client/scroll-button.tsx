'use client'

import { ChevronDown } from 'lucide-react'
import { scrollToSection } from '@/lib/utils/scroll'
import { useState, useEffect } from 'react'

export function ScrollButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    scrollToSection('about')
  }

  if (!mounted) return null

  return (
    <button 
      onClick={handleClick}
      className="absolute bottom-8 animate-bounce cursor-pointer hover:opacity-70 transition-opacity"
      aria-label="Scroll to about section"
    >
      <ChevronDown className="w-8 h-8" />
    </button>
  )
}