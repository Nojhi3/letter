'use client'

import React from 'react'

export default function ComplimentsSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-pink-100 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold text-pink-900">
        I just have to say...
      </h2>
      <p className="mt-6 text-lg md:text-2xl text-pink-800 max-w-xl">
        You're the most amazing person I know. Your kindness, your laughter, your spirit — it makes everything better.
      </p>

      <p className="mt-6 text-lg md:text-2xl text-pink-800 max-w-xl">
        Seriously, every moment with you feels like magic.
      </p>
    </section>
  )
}
