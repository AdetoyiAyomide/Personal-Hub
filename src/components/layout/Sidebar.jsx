import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAnime, setOpenAnime] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("/dashboard/anime")) {
      setOpenAnime(true);
    }
  }, [location.pathname]);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 text-white p-5 rounded-r-4xl">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-lg font-semibold tracking-wide text-white/80">
          Hades Hub
        </h1>
      </div>

      {/* Menu */}
      <div className="space-y-3">

        {/* Coding */}
        <button
          onClick={() => navigate("/dashboard/coding")}
          className="w-full text-left px-3 py-2 rounded-lg text-sm uppercase tracking-wide
          hover:bg-white/10 hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]
          transition-all"
        >
          Coding
        </button>

        {/* Anime Dropdown */}
        <button
          onClick={() => setOpenAnime(!openAnime)}
          className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm uppercase tracking-wide
          hover:bg-white/10 transition-all"
        >
          <span>Anime</span>
          {openAnime ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {/* Subcategories */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            openAnime ? "max-h-40 mt-2" : "max-h-0"
          }`}
        >
          <div className="space-y-1 pl-2 border-l flex flex-col border-white/10">

            <button
            onClick={() => navigate('/dashboard/anime-shows')}
              className="block px-3 py-2 w-full text-start rounded-md text-sm hover:bg-white/10 text-white/70 transition-all"
            >
              Shows
            </button>

            <button
            onClick={() => navigate('/dashboard/Manga')}
              className="block px-3 py-2 rounded-md w-full text-start text-sm hover:bg-white/10 text-white/70 transition-all">
              Manga
            </button>

          </div>
        </div>

        {/* Series */}
        <button
          onClick={() => navigate("/dashboard/series")}
          className="w-full text-left px-3 py-2 rounded-lg text-sm uppercase tracking-wide
          hover:bg-white/10 hover:shadow-[0_0_10px_rgba(139,92,246,0.4)]
          transition-all"
        >
          Series
        </button>

      </div>
    </aside>
  );
};

export default Sidebar;