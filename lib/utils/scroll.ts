export function scrollToSection(sectionId: string) {
  if (typeof window === 'undefined') return
  const section = document.getElementById(sectionId)
  section?.scrollIntoView({ behavior: 'smooth' })
}

export function scrollToTop() {
  if (typeof window === 'undefined') return
  window.scrollTo({ top: 0, behavior: 'smooth' })
}