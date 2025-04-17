'use client'

import { useMotionValue, useTransform, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { v4 as uuidv4 } from 'uuid'

export default function DecisionAuraSection() {
  const mouseX = useMotionValue(0)
  const [screenWidth, setScreenWidth] = useState(1920) // Default fallback

  useEffect(() => {
    setScreenWidth(window.innerWidth)

    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const leftAlpha = useTransform(mouseX, [0, screenWidth / 2], [0.5, 0])
  const rightAlpha = useTransform(mouseX, [screenWidth / 2, screenWidth], [0, 0.5])

  const leftGlow = useTransform(leftAlpha, (alpha) =>
    `radial-gradient(circle at left, rgba(255,255,255,${alpha}) 0%, transparent 90%)`
  )

  const rightGlow = useTransform(rightAlpha, (alpha) =>
    `radial-gradient(circle at right, rgba(0,0,0,${alpha}) 0%, transparent 90%)`
  )

  const handleClick = async (response) => {
    const newUuid = uuidv4()
    const timeResponse = new Date().toISOString()

    console.log('UUID:', newUuid)
    console.log('Response:', response)
    console.log('Time Response:', timeResponse)

    const { data, error } = await supabase
      .from('response_data')
      .insert([{
        uuid: newUuid,
        answer: response,
        time_response: timeResponse
      }])

    if (error) {
      console.error('Error inserting response:', error)
      alert('Something went wrong, please try again!')
      return
    }

    console.log('Response inserted:', data)
    alert(`You selected: ${response}`)
  }

  return (
    <section
      onMouseMove={(e) => mouseX.set(e.clientX)}
      className="relative w-full h-screen bg-pink-300 overflow-hidden flex items-center justify-center text-center"
    >
      {/* Glow Layers */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none blur-2xl" style={{ background: leftGlow }} />
      <motion.div className="absolute inset-0 z-0 pointer-events-none blur-2xl" style={{ background: rightGlow }} />

      {/* Left Arrow - YES */}
      <motion.div
        onClick={() => handleClick('yes')}
        whileHover={{ scale: 1.3, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-5xl text-white opacity-60 cursor-pointer transition-all z-10 select-none"
      >
        ←
      </motion.div>

      {/* Right Arrow - NO */}
      <motion.div
        onClick={() => handleClick('no')}
        whileHover={{ scale: 1.3, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-5xl text-white opacity-60 cursor-pointer transition-all z-10 select-none"
      >
        →
      </motion.div>

      {/* Message */}
      <h1 className="text-3xl md:text-5xl font-bold text-white z-10 px-6">
        So... what&apos;s your answer?
      </h1>
    </section>
  )
}
