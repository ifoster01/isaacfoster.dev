'use client'

import { useState, useEffect } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Special handling for contact section at the bottom
            if (entry.target.id === 'contact' && 
                window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 100) {
              setActiveSection('contact')
              return
            }

            // For other sections, check if they're more than 50% visible
            if (entry.intersectionRatio > 0.5) {
              setActiveSection(entry.target.id)
            }
          }
        })
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]
      }
    )

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    // Handle scroll events for edge cases
    const handleScroll = () => {
      // Top of page - hero section
      if (window.scrollY < 100) {
        setActiveSection('hero')
        return
      }

      // Bottom of page - contact section
      if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 100) {
        setActiveSection('contact')
        return
      }

      // For other positions, find the most visible section
      const visibleSections = Array.from(sections).map(section => {
        const rect = section.getBoundingClientRect()
        const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top)
        const visibleRatio = visibleHeight / window.innerHeight
        return {
          id: section.id,
          ratio: visibleRatio,
          top: rect.top
        }
      }).filter(section => section.ratio > 0)

      if (visibleSections.length > 0) {
        const mostVisible = visibleSections.reduce((prev, current) => {
          if (current.ratio > prev.ratio) return current
          if (current.ratio === prev.ratio && Math.abs(current.top) < Math.abs(prev.top)) return current
          return prev
        })
        setActiveSection(mostVisible.id)
      }
    }

    // Throttled scroll handler
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [])

  return activeSection
}