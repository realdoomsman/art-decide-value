import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import PublishPage from './pages/PublishPage'
import GalleryPage from './pages/GalleryPage'
import ArtPage from './pages/ArtPage'
import HallOfFamePage from './pages/HallOfFamePage'
import WhitepaperPage from './pages/WhitepaperPage'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/art/:id" element={<ArtPage />} />
        <Route path="/hall-of-fame" element={<HallOfFamePage />} />
        <Route path="/whitepaper" element={<WhitepaperPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
