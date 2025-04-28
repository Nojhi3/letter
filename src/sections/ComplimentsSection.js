'use client'
import { motion } from 'framer-motion';
import React from 'react'


const waveVariants = {
  initial: { y: 0 },
  animate: (i) => ({
    y: [0, -8, 0],
    transition: {
      delay: i * 0.05,
      repeat: Infinity,
      duration: 1.2,
      ease: 'easeInOut',
    },
  }),
}

const WavyText = ({ text }) => (
  <h2 className="text-pink-700 text-2xl md:text-3xl font-light text-center">
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={waveVariants}
        initial="initial"
        animate="animate"
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </h2>
)

export default function ComplimentsSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-pink-100 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold text-pink-900">
        I just have to say...
      </h2>
      
      <p className="mt-6 text-lg md:text-2xl text-pink-800 max-w-xl">
        You&apos;re the most amazing person I know. 
      </p>
      
      <WavyText text= "Your Kindness, Your Smile, Your Spirit"/>

      <p className="mt-6 text-lg md:text-2xl text-pink-800 max-w-xl">
        — it makes everything better.
      </p>
      <p className="mt-6 text-lg md:text-2xl text-pink-800 max-w-xl">
        Seriously, every moment with you feels like magic.
      </p>
    </section>
  )
}
