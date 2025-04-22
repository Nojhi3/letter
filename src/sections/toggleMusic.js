'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackgroundMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [interactionTriggered, setInteractionTriggered] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Try autoplay first
    const attemptAutoPlay = async () => {
      try {
        await audioRef.current?.play()
        setIsPlaying(true)
      } catch (err) {
        console.warn('Autoplay failed, waiting for user interaction.')
      }
    }

    attemptAutoPlay()

    // As fallback: add event listeners for first interaction
    const startOnUserInteraction = async () => {
      if (!interactionTriggered && audioRef.current) {
        try {
          await audioRef.current.play()
          setIsPlaying(true)
          setInteractionTriggered(true)
        } catch (err) {
          console.error('Playback still failed:', err)
        }
      }
    }

    window.addEventListener('click', startOnUserInteraction, { once: true })
    window.addEventListener('scroll', startOnUserInteraction, { once: true })

    return () => {
      window.removeEventListener('click', startOnUserInteraction)
      window.removeEventListener('scroll', startOnUserInteraction)
    }
  }, [interactionTriggered])

  const toggleMusic = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (err) {
        console.error('Playback failed:', err)
      }
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
      <audio ref={audioRef} loop>
        <source src="/BackgroundAudio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleMusic}
        className="p-3 rounded-full bg-white shadow-md hover:bg-pink-100 transition-all flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <motion.div className="flex gap-[2px]">
                {[...Array(4)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-[3px] h-5 bg-pink-700 rounded-sm"
                    animate={{ scaleY: [1, 2, 1] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="w-6 h-[2px] bg-pink-800"
            />
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}
