'use client'

import { useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'

await supabase.from('response_data ').insert([
  { answer: "Your answer text here" }
])

export default function TestConnection() {
  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from('response_data').select('*')
      if (error) {
        console.error('❌ Supabase error:', error)
      } else {
        console.log('✅ Supabase connected! Data:', data)
      }
    }
    

    checkConnection()
  }, [])

  return <p>🔍 Check the browser console for Supabase connection test.</p>
}
