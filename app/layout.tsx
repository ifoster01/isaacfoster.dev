import './globals.css'
import React from 'react'
import { Navigation } from '@/components/ui/navigation'
import { FluidBackground } from '@/components/ui/fluid-background'
import { Footer } from '@/components/ui/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <FluidBackground />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}