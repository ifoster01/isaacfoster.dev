'use client'

import { ChevronDown } from 'lucide-react'
import { scrollToSection } from '@/lib/utils/scroll'

export function ScrollButton() {
  const handleClick = () => {
    scrollToSection('about')
  }

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