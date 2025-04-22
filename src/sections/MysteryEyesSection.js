'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function MysteryEyesSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  // Slit reveal: 100px to full height
  const revealHeight = useTransform(scrollYProgress, [0, 1], ['10px', '100%'])

  // Eye-text fade out
  const eyeTextOpacity = useTransform(scrollYProgress, [0.05, 0.5], [1, 0])
  
  // Bottom message fade in
  const fullTextOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])
  const fullTextY = useTransform(scrollYProgress, [0.4, 0.6], [20, 0])

  return (
    <section
      ref={ref}
      className="relative h-[100vh] w-full bg-black text-white overflow-hidden"
    >
      {/* Sticky section that stays during scroll */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-black z-10">

        {/* Slit reveal container (starts at 100px height) */}
        <motion.div
          style={{ height: revealHeight }}
          className="absolute w-full max-w-4xl overflow-hidden z-10 top-1/2 -translate-y-1/2"
        >

          {/* Mona Lisa or desired image */}
          <div className="absolute inset-0 z-0">
            <Image
                src="/3372721.jpg"
                alt="Mystery Eyes"
                width={1000}
                height={1500}
                style={{ 
                    objectFit: 'cover',
                    objectPosition: 'center 30%' 
                }}
                className="w-full h-full object-cover object-center pointer-events-none"
            />
            </div>
        </motion.div>

        {/* Text over the slit (right next to the eyes) */}
        {/* SLIT POSITION: approx top 25% of screen — adjust as needed */}
        <motion.h2
        style={{ opacity: eyeTextOpacity }}
        className="absolute top-[50%] left-1/4 -translate-x-1/2 text-2xl md:text-3xl text-pink-300 z-30"
        >
        Are these your eyes?
        </motion.h2>

        {/* Text that appears below the full image */}
        <motion.h2
          style={{ opacity: fullTextOpacity, y: fullTextY }}
          className="absolute top-[80%] bottom-16 left-1/4 -translate-x-1/4 text-4xl md:text-4xl text-white-300 z-20"
        >
          For me absolutely yes.......
        </motion.h2>
      </div>
    </section>
  )
}
