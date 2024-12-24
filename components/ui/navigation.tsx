'use client'

import { NavLink } from './nav-link'
import { useActiveSection } from '@/hooks/use-active-section'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export function Navigation() {
  const activeSection = useActiveSection()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we need mobile view based on screen width and nav item width
  useEffect(() => {
    const checkMobileView = () => {
      const navWidth = navItems.length * 100 // Approximate width per nav item
      setIsMobile(window.innerWidth < navWidth)
    }

    checkMobileView()
    window.addEventListener('resize', checkMobileView)
    return () => window.removeEventListener('resize', checkMobileView)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-border/40",
      isMobile ? "bg-background" : "bg-background/80 backdrop-blur-sm"
    )}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button - only show if actually needed */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-background/90 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </button>
          )}

          {/* Navigation - show normally if not mobile */}
          <div className={cn(
            "items-center justify-center flex-1",
            isMobile ? "hidden" : "flex"
          )}>
            {navItems.map(({ href, label }) => (
              <NavLink 
                key={href} 
                href={href}
                isActive={activeSection === href.replace('#', '')}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          <AnimatePresence>
            {isOpen && isMobile && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-background/80 backdrop-blur-sm"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  className="fixed right-0 top-0 bottom-0 w-3/4 max-w-sm bg-background p-6 shadow-lg"
                >
                  <div className="flex flex-col space-y-4">
                    {navItems.map(({ href, label }) => (
                      <NavLink 
                        key={href} 
                        href={href}
                        isActive={activeSection === href.replace('#', '')}
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}