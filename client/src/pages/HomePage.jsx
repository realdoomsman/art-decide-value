import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import './HomePage.css'

function HomePage() {
  const [recentArt, setRecentArt] = useState([])

  useEffect(() => {
    const fetchArt = async () => {
      const { data, error } = await supabase
        .from('artworks')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6)
      
      if (!error && data) setRecentArt(data)
    }
    fetchArt()
  }, [])

  return (
    <div className="home-page">
      <section className="hero">
        <h1 className="hero-title">Worthless-looking art has value because people decide it.</h1>
        <p className="hero-subtitle">Draw. Publish. Let the world decide.</p>
        <Link to="/create" className="cta-button">Create ART</Link>
      </section>

      <section className="recent-art">
        <h2>Recent Creations</h2>
        <div className="art-grid">
          {recentArt.map(art => (
            <Link to={`/art/${art.id}`} key={art.id} className="art-card">
              <img src={art.image_url} alt={art.title} />
              <div className="art-info">
                <h3>{art.title}</h3>
                <p>by {art.artist}</p>
                <span>❤️ {art.likes}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="explanation">
        <h2>What is ART?</h2>
        <p>A platform where anyone can create scribble art and publish it. No skills needed. No AI. Just you, a canvas, and your imagination.</p>
        <p>The community decides what has value through likes and engagement.</p>
      </section>
    </div>
  )
}

export default HomePage
