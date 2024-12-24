'use client'

import { useState, useEffect } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [intersectingElements, setIntersectingElements] = useState<Set<string>>(new Set(['hero']))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIntersectingElements((prev) => {
            const updated = new Set(prev)
            if (entry.isIntersecting) {
              updated.add(entry.target.id)
            } else {
              updated.delete(entry.target.id)
            }
            return updated
          })
        })
      },
      {
        // Smaller rootMargin to ensure more accurate detection
        rootMargin: '-45% 0px -45% 0px',
        // Multiple thresholds for better accuracy
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
      }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    // Update active section based on intersection and scroll position
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('hero')
        return
      }

      // Get all sections and their positions
      const sectionPositions = Array.from(sections).map((section) => {
        const rect = section.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const visiblePercentage = Math.min(
          Math.max(
            0,
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
          ) / viewportHeight,
          1
        )
        return {
          id: section.id,
          visiblePercentage,
          top: rect.top
        }
      })

      // Find the most visible section
      const mostVisible = sectionPositions.reduce((prev, current) => {
        if (current.visiblePercentage > prev.visiblePercentage) {
          return current
        }
        // If equal visibility, prefer the one closer to the top
        if (current.visiblePercentage === prev.visiblePercentage) {
          return Math.abs(current.top) < Math.abs(prev.top) ? current : prev
        }
        return prev
      }, sectionPositions[0])

      if (mostVisible && mostVisible.visiblePercentage > 0) {
        setActiveSection(mostVisible.id)
      }
    }

    // Throttle scroll handler for better performance
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
    // Initial check
    handleScroll()

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [])

  return activeSection
}