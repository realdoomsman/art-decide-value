import express from 'express'
import cors from 'cors'
import { createClient } from '@supabase/supabase-js'

const app = express()
const PORT = 5000

const supabase = createClient(
  'https://ujvoqytuftpcfgmfzscx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqdm9xeXR1ZnRwY2ZnbWZ6c2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxNDU5MTcsImV4cCI6MjA4MjcyMTkxN30.IQNJFyOkdBmZowNuz7C6ztLE8AbNuCDfpzZf_M1-k2Y'
)

app.use(cors())
app.use(express.json({ limit: '50mb' }))

// Art routes
app.get('/api/art', async (req, res) => {
  const { limit, sort, artist } = req.query
  
  let query = supabase.from('artworks').select('*')
  
  if (artist) {
    query = query.eq('artist', artist)
  }
  
  if (sort === 'popular') {
    query = query.order('likes', { ascending: false })
  } else if (sort === 'random') {
    query = query.order('id', { ascending: false })
  } else {
    query = query.order('created_at', { ascending: false })
  }
  
  if (limit) {
    query = query.limit(parseInt(limit))
  }
  
  const { data, error } = await query
  
  if (error) {
    return res.status(500).json({ error: error.message })
  }
  
  res.json(data)
})

app.get('/api/art/:id', async (req, res) => {
  const { data, error } = await supabase
    .from('artworks')
    .select('*')
    .eq('id', parseInt(req.params.id))
    .single()
  
  if (error || !data) {
    return res.status(404).json({ error: 'Art not found' })
  }
  
  res.json(data)
})

app.post('/api/art', async (req, res) => {
  const { title, description, imageUrl, artist } = req.body
  
  const { data, error } = await supabase
    .from('artworks')
    .insert({
      title,
      description,
      image_url: imageUrl,
      artist: artist || 'Anonymous'
    })
    .select()
    .single()
  
  if (error) {
    return res.status(500).json({ error: error.message })
  }
  
  res.json(data)
})

app.post('/api/art/:id/like', async (req, res) => {
  const { data: art } = await supabase
    .from('artworks')
    .select('likes')
    .eq('id', parseInt(req.params.id))
    .single()
  
  if (!art) {
    return res.status(404).json({ error: 'Art not found' })
  }
  
  const { data, error } = await supabase
    .from('artworks')
    .update({ likes: art.likes + 1 })
    .eq('id', parseInt(req.params.id))
    .select()
    .single()
  
  if (error) {
    return res.status(500).json({ error: error.message })
  }
  
  res.json({ likes: data.likes })
})

// Comments routes
app.get('/api/art/:id/comments', async (req, res) => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('art_id', parseInt(req.params.id))
    .order('created_at', { ascending: true })
  
  if (error) {
    return res.status(500).json({ error: error.message })
  }
  
  res.json(data)
})

app.post('/api/art/:id/comments', async (req, res) => {
  const { username, text } = req.body
  
  const { data, error } = await supabase
    .from('comments')
    .insert({
      art_id: parseInt(req.params.id),
      username: username || 'Anonymous',
      text
    })
    .select()
    .single()
  
  if (error) {
    return res.status(500).json({ error: error.message })
  }
  
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`🎨 ART server running on http://localhost:${PORT}`)
})
