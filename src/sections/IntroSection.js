'use client'

import React from 'react'

export default function IntroSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-pink-50 px-4">
      <h1 className="text-4xl md:text-6xl font-light text-pink-800">
        Hey you 🌸
      </h1>
      <p className="mt-6 text-lg md:text-2xl text-pink-700 max-w-xl">
        I built this little something for you — scroll down, take your time. It’s just my way of saying what I usually can’t.
      </p>

      <div className="absolute bottom-10 animate-bounce text-pink-400 text-2xl">
        ↓
      </div>
    </section>
  )
}
