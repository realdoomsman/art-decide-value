import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Decide the Value</Link>
      <nav>
        <Link to="/gallery">Gallery</Link>
        <Link to="/hall-of-fame">Hall of Fame</Link>
        <Link to="/whitepaper">Whitepaper</Link>
        <a href="https://x.com/DecideTheValue" target="_blank" rel="noopener noreferrer" className="twitter-link">Twitter</a>
        <Link to="/create" className="create-btn">Create ART</Link>
      </nav>
    </header>
  )
}

export default Header
