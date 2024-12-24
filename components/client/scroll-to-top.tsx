'use client'

import React from 'react'
import { scrollToTop } from '@/lib/utils/scroll'

interface ScrollToTopProps {
  children: React.ReactNode
  className?: string
}

export function ScrollToTop({ children, className }: ScrollToTopProps) {
  return (
    <button 
      onClick={scrollToTop}
      className={className}
      aria-label="Scroll to top"
    >
      {children}
    </button>
  )
}