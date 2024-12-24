'use client'

import { scrollToSection } from '@/lib/utils/scroll'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const sectionId = href.replace('#', '')
    scrollToSection(sectionId)
  }

  return (
    <a 
      href={href}
      onClick={handleClick}
      className="px-4 py-2 hover:text-primary transition-colors"
    >
      {children}
    </a>
  )
}