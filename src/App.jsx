import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Home from './components/pages/Home'
import LoadingScreen from './components/LoadingScreen'
import ShutDownLoadingScreen from './components/ShutDownLoadingScreen'
import Mangas from './components/pages/Mangas'
import AnimeShows from './components/pages/AnimeShows'
import Layout from './components/layout/Layout'
import Coding from './components/pages/Coding'
import Anime from './components/pages/Anime'
import Series from './components/pages/Series'

function App() {
  const [booting, setBooting] = useState(true)
  const [progress, setProgress] = useState(0)

  const location = useLocation()

  // BOOT SEQUENCE
  useEffect(() => {
    if (!booting || location.pathname === '/shutdown') {
      return undefined
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }

        return Math.min(prev + 2, 100)
      })
    }, 80)

    return () => clearInterval(interval)
  }, [booting, location.pathname])

  useEffect(() => {
    if (!booting || location.pathname === '/shutdown') {
      return undefined
    }

    if (progress < 100) {
      return undefined
    }

    const timeout = setTimeout(() => {
      setBooting(false)
    }, 500)

    return () => clearTimeout(timeout)
  }, [booting, progress, location.pathname])

  if (booting && location.pathname !== '/shutdown') {
    return <LoadingScreen progress={progress} />
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* HOME */}
      <Route path="/home" element={<Home />} />

      {/* DASHBOARD LAYOUT */}
      <Route path="/dashboard" element={<Layout />}>
        <Route path="coding" element={<Coding />} />
        <Route path="anime" element={<Anime />} />
        <Route path="anime-shows" element={<AnimeShows />} />
        <Route path="Manga" element={<Mangas />} />
        <Route path="series" element={<Series />} />
      </Route>

      {/* SHUTDOWN */}
      <Route path="/shutdown" element={<ShutDownLoadingScreen />} />

    </Routes>
  )
}

export default App