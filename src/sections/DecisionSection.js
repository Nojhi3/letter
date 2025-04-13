'use client'

import React from 'react'
import { supabase } from '../utils/supabaseClient'

export default function DecisionSection() {
    const handleClick = async (response) => {
        const { data, error } = await supabase
          .from('response_data')
          .insert([{ answer: response }])  // Insert the answer into the 'responses' table
      
        // Check for any error while inserting
        if (error) {
          console.error('Error inserting response:', error)
          alert('Something went wrong, please try again!')
          return
        }
      
        // Log the successful insert (or you can alert it for confirmation)
        console.log('Response inserted:', data)
        alert(`You selected: ${response}`)
      }
      

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center bg-pink-300 px-4 relative">
      <h2 className="text-2xl md:text-4xl font-semibold text-pink-900 mb-12">
        So... what&aposs your answer?
      </h2>

      <div className="flex w-full justify-between px-10 md:px-32 absolute bottom-24">
        <button
          onClick={() => handleClick('yes')}
          className="text-green-700 bg-white px-6 py-4 rounded-2xl text-xl hover:bg-green-100 transition-all duration-300 shadow-lg"
        >
          💖 Yes
        </button>

        <button
          onClick={() => handleClick('no')}
          className="text-red-700 bg-white px-6 py-4 rounded-2xl text-xl hover:bg-red-100 transition-all duration-300 shadow-lg"
        >
          🫣 No
        </button>
      </div>
    </section>
  )
}
