'use client'

import { useMotionValue, useTransform, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import { v4 as uuidv4 } from 'uuid'
import Confetti from 'react-confetti'

export default function DecisionAuraSection() {
  const mouseX = useMotionValue(0)
  const [screenWidth, setScreenWidth] = useState(1920)
  const [showConfetti, setShowConfetti] = useState(false) // State to control confetti display
  const [confettiPhase, setConfettiPhase] = useState(false) // Phase to manage confetti transition
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [uuid, setUuid] = useState(null)

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
    setUuid(newUuid)
    setShowConfetti(true) // Trigger confetti

    // Switch to confetti phase for 5 seconds
    setConfettiPhase(true)

    // After 5 seconds, show feedback section
    setTimeout(() => {
      setShowConfetti(false) // Hide confetti
      setConfettiPhase(false) // End confetti phase
      setShowFeedback(true) // Show feedback section
    }, 5000) // Delay of 5 seconds before showing feedback section
  }

  const submitFeedback = async () => {
    if (!uuid) {
      alert("Missing response UUID, can't submit feedback.")
      return
    }

    if (!feedback.trim()) {
      alert('Please provide feedback before submitting.')
      return
    }

    const { data: existing, error: checkError } = await supabase
      .from('response_data')
      .select('*')
      .eq('uuid', uuid)

    if (checkError || !existing || existing.length === 0) {
      console.error('UUID not found in table:', uuid)
      alert('Your response was not found. Please try again.')
      return
    }

    const { data, error } = await supabase
      .from('response_data')
      .update({
        feedback: feedback,
        time_feedback: new Date().toISOString(),
      })
      .eq('uuid', uuid)

    if (error) {
      console.error('Error submitting feedback:', error)
      alert('Could not submit feedback!')
    } else {
      console.log('Feedback submitted successfully:', data)
      alert('Thanks for your feedback!')
      setShowFeedback(false)
      setFeedback('')
    }
  }

  return (
    <section
      onMouseMove={(e) => mouseX.set(e.clientX)}
      className="relative w-full h-screen bg-pink-300 overflow-hidden flex items-center justify-center text-center"
    >
      {/* Glow Layers */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none blur-2xl" style={{ background: leftGlow }} />
      <motion.div className="absolute inset-0 z-0 pointer-events-none blur-2xl" style={{ background: rightGlow }} />

      {/* Confetti Animation */}
      {showConfetti && confettiPhase && (
        <div className="absolute top-0 left-0 z-50 w-full h-full">
          <Confetti width={screenWidth} height={window.innerHeight} />
        </div>
      )}

      {/* Message */}
      {!showFeedback && !confettiPhase && (
        <h1 className="text-3xl md:text-5xl font-bold text-white z-10 px-6">
          So... what&apos;s your answer?
        </h1>
      )}

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

      {/* Feedback Form */}
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-8 z-10"
        >
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Any feedback or thoughts?"
            className="w-full max-w-md rounded-xl p-4 text-black text-lg shadow-md resize-none"
            rows={4}
          />
          <button
            onClick={submitFeedback}
            className="mt-4 px-6 py-2 bg-white text-pink-900 rounded-xl font-semibold shadow hover:bg-pink-100 transition-all"
          >
            Submit Feedback
          </button>
        </motion.div>
      )}
    </section>
  )
}
