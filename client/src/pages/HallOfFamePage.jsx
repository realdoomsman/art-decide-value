import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HallOfFamePage.css'

function HallOfFamePage() {
  const [topArt, setTopArt] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/art?sort=popular&limit=20')
      .then(res => res.json())
      .then(data => {
        setTopArt(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
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
