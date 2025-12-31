import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './PublishPage.css'

function PublishPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageData, setImageData] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const drawing = localStorage.getItem('currentDrawing')
    if (!drawing) {
      navigate('/create')
      return
    }
    setImageData(drawing)
  }, [navigate])

  const handlePublish = async () => {
    if (!title.trim()) {
      alert('Please add a title!')
      return
    }

    try {
      const response = await fetch('/api/art', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          imageUrl: imageData,
          artist: 'Anonymous'
        })
      })

      const data = await response.json()
      localStorage.removeItem('currentDrawing')
      navigate(`/art/${data.id}`)
    } catch (err) {
      console.error(err)
      alert('Failed to publish. Please try again.')
    }
  }

  return (
    <div className="publish-page">
      <h1>Publish Your ART</h1>
      
      <div className="publish-container">
        <div className="preview">
          <img src={imageData} alt="Your art" />
        </div>

        <div className="publish-form">
          <input
            type="text"
            placeholder="Give your art a title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={50}
          />
          
          <textarea
            placeholder="Add a description (optional)..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            rows={4}
          />

          <button onClick={handlePublish} className="publish-btn">
            Publish ART
          </button>
        </div>
      </div>
    </div>
  )
}

export default PublishPage
