import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
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
    const { data, error } = await supabase
      .from('artworks')
      .select('*')
      .eq('id', id)
      .single()
    
    if (!error && data) setArt(data)
  }

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('artwork_id', id)
      .order('created_at', { ascending: true })
    
    if (!error && data) setComments(data)
  }

  const handleLike = async () => {
    if (hasLiked || !art) return
    
    const { error } = await supabase
      .from('artworks')
      .update({ likes: art.likes + 1 })
      .eq('id', id)
    
    if (!error) {
      setArt(prev => ({ ...prev, likes: prev.likes + 1 }))
      setHasLiked(true)
    }
  }

  const handleComment = async () => {
    if (!newComment.trim()) return

    const { data, error } = await supabase
      .from('comments')
      .insert({
        artwork_id: id,
        username: 'Anonymous',
        text: newComment
      })
      .select()
      .single()
    
    if (!error && data) {
      setComments([...comments, data])
      setNewComment('')
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
