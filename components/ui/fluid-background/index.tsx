'use client'

import { useEffect, useRef } from 'react'
import { FluidAnimation } from './fluid-animation'

export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<FluidAnimation | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    animationRef.current = new FluidAnimation(canvasRef.current)

    return () => {
      animationRef.current?.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}