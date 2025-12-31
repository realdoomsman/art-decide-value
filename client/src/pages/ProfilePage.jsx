import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProfilePage.css'

function ProfilePage() {
  const { username } = useParams()
  const [profile, setProfile] = useState(null)
  const [userArt, setUserArt] = useState([])

  useEffect(() => {
    fetchProfile()
    fetchUserArt()
  }, [username])

  const fetchProfile = async () => {
    try {
      const response = await fetch(`/api/users/${username}`)
      const data = await response.json()
      setProfile(data)
    } catch (err) {
      console.error(err)
    }
  }

  const fetchUserArt = async () => {
    try {
      const response = await fetch(`/api/art?artist=${username}`)
      const data = await response.json()
      setUserArt(data)
    } catch (err) {
      console.error(err)
    }
  }

  if (!profile) return <div className="loading">Loading...</div>

  const totalLikes = userArt.reduce((sum, art) => sum + art.likes, 0)

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar">
          {username.charAt(0).toUpperCase()}
        </div>
        <h1>{username}</h1>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">{userArt.length}</span>
            <span className="stat-label">Artworks</span>
          </div>
          <div className="stat">
            <span className="stat-value">{totalLikes}</span>
            <span className="stat-label">Total Likes</span>
          </div>
        </div>
      </div>

      <div className="profile-art">
        <h2>Artworks</h2>
        <div className="art-grid">
          {userArt.map(art => (
            <Link to={`/art/${art.id}`} key={art.id} className="art-card">
              <img src={art.imageUrl} alt={art.title} />
              <div className="art-info">
                <h3>{art.title}</h3>
                <span>❤️ {art.likes}</span>
              </div>
            </Link>
          ))}
        </div>

        {userArt.length === 0 && (
          <p className="no-art">No artworks yet</p>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
