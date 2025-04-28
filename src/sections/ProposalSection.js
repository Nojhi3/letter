'use client'

import React from 'react'

export default function ProposalSection() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-pink-200 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold text-pink-900">
        So... here&apos;s the truth.
      </h2>
      <p className="mt-6 text-lg md:text-2xl text-pink-900 max-w-2xl">
        I love you. Like, really love you. More than I&apos;ve ever loved anyone.
      </p>
      <p className="mt-6 text-lg md:text-2xl text-pink-900 max-w-2xl">
        This isn&apos;t just a page, it&apos;s a piece of how I feel. And I was wondering...
      </p>
      <p className="mt-10 text-4xl md:text-5xl font-bold text-pink-800">
        Would you like to go out with me? 💌
      </p>
    </section>
  )
}
