'use client'

import { cn } from '@/lib/utils'
import { scrollToSection, scrollToTop } from '@/lib/utils/scroll'
import { motion } from 'framer-motion'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}

export function NavLink({ href, children, isActive, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (href === '#hero') {
      scrollToTop()
    } else {
      const sectionId = href.replace('#', '')
      scrollToSection(sectionId)
    }
    if (onClick) onClick()
  }

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={cn(
        "px-4 py-2 transition-colors relative",
        isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
      )}
    >
      {children}
      {isActive && (
        <motion.span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
          layoutId="navIndicator"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30
          }}
        />
      )}
    </a>
  )
}