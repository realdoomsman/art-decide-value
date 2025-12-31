import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreatePage.css'

const COLORS = [
  '#FF6B9D', '#FFA07A', '#FFD93D', '#6BCF7F', '#4ECDC4',
  '#45B7D1', '#667EEA', '#764BA2', '#F093FB', '#F5576C',
  '#FF8C42', '#2EC4B6', '#E71D36', '#011627', '#FFFFFF', '#000000'
]

function CreatePage() {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState('#FF6B9D')
  const [brushSize, setBrushSize] = useState(10)
  const [history, setHistory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    saveHistory()
  }, [])

  const saveHistory = () => {
    const canvas = canvasRef.current
    setHistory(prev => [...prev, canvas.toDataURL()])
  }

  const startDrawing = (e) => {
    setIsDrawing(true)
    draw(e)
  }

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false)
      saveHistory()
    }
  }

  const draw = (e) => {
    if (!isDrawing && e.type !== 'mousedown' && e.type !== 'touchstart') return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const rect = canvas.getBoundingClientRect()
    
    let x, y
    if (e.type.includes('touch')) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = color
    ctx.lineWidth = brushSize

    if (e.type === 'mousedown' || e.type === 'touchstart') {
      ctx.beginPath()
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
      ctx.stroke()
    }
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    saveHistory()
  }

  const undo = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      setHistory(newHistory)
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.src = newHistory[newHistory.length - 1]
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
      }
    }
  }

  const saveDrawing = () => {
    const canvas = canvasRef.current
    const imageData = canvas.toDataURL('image/png')
    localStorage.setItem('currentDrawing', imageData)
    navigate('/publish')
  }

  return (
    <div className="create-page">
      <h1>Create Your ART</h1>
      
      <div className="canvas-container">
        <canvas
          ref={canvasRef}
          width={600}
          height={600}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>

      <div className="tools">
        <div className="color-picker">
          {COLORS.map(c => (
            <button
              key={c}
              className={`color-btn ${color === c ? 'active' : ''}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>

        <div className="brush-sizes">
          <button
            className={`size-btn ${brushSize === 5 ? 'active' : ''}`}
            onClick={() => setBrushSize(5)}
          >
            Small
          </button>
          <button
            className={`size-btn ${brushSize === 10 ? 'active' : ''}`}
            onClick={() => setBrushSize(10)}
          >
            Medium
          </button>
          <button
            className={`size-btn ${brushSize === 20 ? 'active' : ''}`}
            onClick={() => setBrushSize(20)}
          >
            Large
          </button>
        </div>

        <div className="actions">
          <button onClick={undo} className="action-btn">Undo</button>
          <button onClick={clearCanvas} className="action-btn clear">Clear</button>
          <button onClick={saveDrawing} className="action-btn save">Save & Publish</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePage
