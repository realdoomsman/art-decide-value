import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ujvoqytuftpcfgmfzscx.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqdm9xeXR1ZnRwY2ZnbWZ6c2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxNDU5MTcsImV4cCI6MjA4MjcyMTkxN30.IQNJFyOkdBmZowNuz7C6ztLE8AbNuCDfpzZf_M1-k2Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
