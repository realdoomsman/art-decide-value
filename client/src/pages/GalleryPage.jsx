import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './GalleryPage.css'

function GalleryPage() {
  const [art, setArt] = useState([])
  const [filter, setFilter] = useState('newest')

  useEffect(() => {
    fetchArt()
  }, [filter])

  const fetchArt = async () => {
    try {
      const response = await fetch(`/api/art?sort=${filter}`)
      const data = await response.json()
      setArt(data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="gallery-page">
      <h1>ART Gallery</h1>
      
      <div className="filters">
        <button
          className={filter === 'newest' ? 'active' : ''}
          onClick={() => setFilter('newest')}
        >
          Newest
        </button>
        <button
          className={filter === 'popular' ? 'active' : ''}
          onClick={() => setFilter('popular')}
        >
          Most Liked
        </button>
        <button
          className={filter === 'random' ? 'active' : ''}
          onClick={() => setFilter('random')}
        >
          Random
        </button>
      </div>

      <div className="gallery-grid">
        {art.map(item => (
          <Link to={`/art/${item.id}`} key={item.id} className="gallery-card">
            <img src={item.image_url} alt={item.title} />
            <div className="card-info">
              <h3>{item.title}</h3>
              <p>by {item.artist}</p>
              <span>❤️ {item.likes}</span>
            </div>
          </Link>
        ))}
      </div>

      {art.length === 0 && (
        <div className="empty-state">
          <p>No art yet. Be the first to create!</p>
          <Link to="/create" className="create-link">Create ART</Link>
        </div>
      )}
    </div>
  )
}

export default GalleryPage
