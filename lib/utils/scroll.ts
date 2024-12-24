export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId)
  section?.scrollIntoView({ behavior: 'smooth' })
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}