import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './HallOfFamePage.css'

function HallOfFamePage() {
  const [topArt, setTopArt] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTopArt = async () => {
      const { data, error } = await supabase
        .from('artworks')
        .select('*')
        .order('likes', { ascending: false })
        .limit(20)
      
      if (!error && data) setTopArt(data)
      setLoading(false)
    }
    fetchTopArt()
  }, [])

  if (loading) return <div className="loading">Loading...</div>

  return (
    <div className="hall-of-fame-page">
      <div className="hof-header">
        <h1>🏆 Hall of Fame</h1>
        <p>The most loved artworks. Top picks get minted into the official NFT collection.</p>
      </div>

      <div className="hof-grid">
        {topArt.map((art, index) => (
          <Link to={`/art/${art.id}`} key={art.id} className="hof-card">
            <div className="rank">#{index + 1}</div>
            <img src={art.image_url} alt={art.title} />
            <div className="hof-info">
              <h3>{art.title}</h3>
              <span className="likes">❤️ {art.likes}</span>
            </div>
          </Link>
        ))}
      </div>

      {topArt.length === 0 && (
        <p className="empty">No art yet. Be the first to create!</p>
      )}
    </div>
  )
}

export default HallOfFamePage
