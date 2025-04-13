import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cfxveeevrecwhrnfrrrs.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmeHZlZWV2cmVjd2hybmZycnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0ODAzNjQsImV4cCI6MjA2MDA1NjM2NH0.NCd4OFTQ44MxPWMYwBY4I41cEafZ40rI0cAbjgIEnu8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
