import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoSearchSharp, IoBackspaceOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('')

  const pathSegments = location.pathname.split('/').filter(Boolean)
  const currentSection =
    pathSegments[pathSegments.length - 1]?.replace(/-/g, ' ') || 'home'
  const pageLabel = currentSection.toLowerCase()
  const searchPlaceholder = `${pageLabel} Dashboard`
  const searchRoutes = {
    home: '/home',
    coding: '/dashboard/coding',
    anime: '/dashboard/anime',
    'anime shows': '/dashboard/anime-shows',
    shows: '/dashboard/anime-shows',
    manga: '/dashboard/Manga',
    series: '/dashboard/series',
  }

  const handleClearSearch = () => {
    setSearchValue('')
  }

  const handleSearch = () => {
    const normalizedQuery = searchValue.trim().toLowerCase()

    if (!normalizedQuery) {
      return
    }

    const matchedRoute = searchRoutes[normalizedQuery]

    if (matchedRoute) {
      navigate(matchedRoute)
    }
  }

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSearch()
    }
  }

  return (
    <header className='flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4 text-white'>
      <div>
        <p className='text-xs uppercase tracking-[0.3em] text-white/50'>Current page</p>
        <h1 className='text-2xl font-semibold capitalize tracking-wide'>{pageLabel}</h1>
      </div>

      <button
        type='button'
        onClick={toggleSidebar}
        className='rounded-xl border border-white/15 bg-white/5 p-3 text-lg transition hover:bg-white/10'
      >
        <GiHamburgerMenu />
      </button>

      <div className='w-full max-w-xl'>
        <label className='flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-lg backdrop-blur-md transition-colors focus-within:border-cyan-400/60 focus-within:bg-white/8'>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            onKeyDown={handleSearchKeyDown}
            className='w-full bg-transparent text-sm capitalize text-white placeholder:text-white/45 focus:outline-none'
          />
          <button type='button' onClick={handleClearSearch} className='transition hover:text-cyan-300'>
            <IoBackspaceOutline />
          </button>
          <button type='button' onClick={handleSearch} className='transition hover:text-cyan-300'>
            <IoSearchSharp />
          </button>
        </label>
      </div>
      {/* add link */}
      <div className='flex gap-4'>
        <button className='rounded-lg flex items-center gap-2 bg-[linear-gradient(143deg,_rgba(255,255,255,1)_0%,_rgba(119,14,194,1)_21%,_rgba(138,16,199,1)_81%,_rgba(255,255,255,1)_100%)] p-2'>
          <FaPlus />
          Add Link
        </button>

         <button
            onClick={() => navigate("/shutdown")}
            className="p-3 text-white text-xl bg-blue-500/80 backdrop-blur-md rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300 shadow-lg z-50">
            <FaPowerOff />
          </button>
      </div>
    </header>
  )
}

export default Header
