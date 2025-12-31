import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ArtPage.css'

function ArtPage() {
  const { id } = useParams()
  const [art, setArt] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [hasLiked, setHasLiked] = useState(false)

  useEffect(() => {
    fetchArt()
    fetchComments()
  }, [id])

  const fetchArt = async () => {
    try {
      const response = await fetch(`/api/art/${id}`)
      const data = await response.json()
      setArt(data)
    } catch (err) {
      console.error(err)
    }
  }

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/art/${id}/comments`)
      const data = await response.json()
      setComments(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleLike = async () => {
    if (hasLiked) return
    
    try {
      await fetch(`/api/art/${id}/like`, { method: 'POST' })
      setArt(prev => ({ ...prev, likes: prev.likes + 1 }))
      setHasLiked(true)
    } catch (err) {
      console.error(err)
    }
  }

  const handleComment = async () => {
    if (!newComment.trim()) return

    try {
      const response = await fetch(`/api/art/${id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'Anonymous',
          text: newComment
        })
      })
      
      const comment = await response.json()
      setComments([...comments, comment])
      setNewComment('')
    } catch (err) {
      console.error(err)
    }
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('Link copied to clipboard!')
  }

  if (!art) return <div className="loading">Loading...</div>

  return (
    <div className="art-page">
      <div className="art-display">
        <img src={art.image_url} alt={art.title} />
      </div>

      <div className="art-details">
        <h1>{art.title}</h1>
        <p className="artist">by {art.artist}</p>
        
        {art.description && <p className="description">{art.description}</p>}

        <div className="actions">
          <button onClick={handleLike} className={`like-btn ${hasLiked ? 'liked' : ''}`}>
            ❤️ {art.likes}
          </button>
          <button onClick={handleShare} className="share-btn">
            🔗 Share
          </button>
          <button className="mint-btn" disabled>
            🪙 Mint NFT (Coming Soon)
          </button>
        </div>

        <div className="comments-section">
          <h2>Comments</h2>
          
          <div className="comment-input">
            <textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={3}
            />
            <button onClick={handleComment}>Post</button>
          </div>

          <div className="comments-list">
            {comments.map((comment, idx) => (
              <div key={idx} className="comment">
                <strong>{comment.username}</strong>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtPage
