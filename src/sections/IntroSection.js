'use client'
import { motion } from 'framer-motion';
import React from 'react';

export default function IntroSection() {
  return (
    <motion.section
      className="h-screen w-full flex flex-col items-center justify-center text-center bg-pink-50 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-6xl font-light text-pink-800">
        Hey there{' '}
        <span className="animated-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-[length:200%_200%] text-transparent bg-clip-text animate-gradient">
          Kumkum
        </span>
      </h1>
      <p className="mt-6 text-lg md:text-2xl text-pink-700 max-w-xl">
        I built this little something for you — scroll down, take your time. It&apos;s just my way of saying what I usually can&apos;t.
      </p>

      <div className="absolute bottom-10 animate-bounce text-pink-400 text-2xl">
        ↓
      </div>
    </motion.section>
  )
}
