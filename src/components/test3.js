"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

export default function DecisionAura() {
  const mouseX = useMotionValue(0)
  const screenWidth = useRef(0)

  useEffect(() => {
    screenWidth.current = window.innerWidth
  }, [])

  const leftAlpha = useTransform(mouseX, [0, screenWidth.current / 2], [0.5, 0])
  const rightAlpha = useTransform(mouseX, [screenWidth.current / 2, screenWidth.current], [0, 0.5])

  const leftGlow = useTransform(leftAlpha, (alpha) =>
    `radial-gradient(circle at left, rgba(255,255,255,${alpha}) 0%, transparent 90%)`
  )

  const rightGlow = useTransform(rightAlpha, (alpha) =>
    `radial-gradient(circle at right, rgba(0,0,0,${alpha}) 0%, transparent 90%)`
  )

  return (
    <section
      onMouseMove={(e) => mouseX.set(e.clientX)}
      className="relative w-full h-screen bg-pink-500 overflow-hidden flex items-center justify-center text-center"
    >
      {/* Glow layers */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none blur-2xl"
        style={{
          background: leftGlow,
        }}
      />
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none blur-2xl"
        style={{
          background: rightGlow,
        }}
      />

      {/* Arrows */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-5xl text-neutral-700 opacity-50 hover:opacity-100 transition-all z-10 select-none">
        ←
      </div>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 text-5xl text-neutral-300 opacity-50 hover:opacity-100 transition-all z-10 select-none">
        →
      </div>

      {/* Central message */}
      <h1 className="text-3xl md:text-5xl font-bold text-pink-100 z-10 px-6">
        So... what's your answer?
      </h1>
    </section>
  )
}
