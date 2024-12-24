'use client'

import { cn } from '@/lib/utils'
import { scrollToSection, scrollToTop } from '@/lib/utils/scroll'
import { motion } from 'framer-motion'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  isMobile?: boolean
}

export function NavLink({ href, children, isActive, onClick, isMobile }: NavLinkProps) {
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
        isActive ? "text-primary" : "text-foreground/80 hover:text-primary",
        isMobile && "w-full flex items-center justify-center"
      )}
    >
      {children}
      {isActive && (
        <motion.span 
          className={cn(
            "absolute bg-primary rounded-full",
            isMobile ? "left-0 top-1/2 -translate-y-1/2 w-1 h-4" : "bottom-0 left-1/2 -translate-x-1/2 w-1 h-1"
          )}
          layoutId={isMobile ? "mobileNavIndicator" : "desktopNavIndicator"}
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