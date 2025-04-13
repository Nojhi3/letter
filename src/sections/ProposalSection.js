'use client'

import React from 'react'

export default function ProposalSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-pink-200 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold text-pink-900">
        So... here’s the truth.
      </h2>
      <p className="mt-6 text-lg md:text-2xl text-pink-900 max-w-2xl">
        I like you. Like, really like you. More than I’ve ever liked anyone.
      </p>
      <p className="mt-6 text-lg md:text-2xl text-pink-900 max-w-2xl">
        This isn’t just a page, it’s a piece of how I feel. And I was wondering...
      </p>
      <p className="mt-10 text-4xl md:text-5xl font-bold text-pink-800">
        Would you like to go out with me? 💌
      </p>
    </section>
  )
}
