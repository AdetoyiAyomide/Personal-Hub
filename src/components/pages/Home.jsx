import React from 'react'
import { TbArrowBigRightLinesFilled, TbArrowBigLeftLinesFilled } from "react-icons/tb";
import { FaPowerOff } from "react-icons/fa"
import { categories } from '../../data/data'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">

      {/* Background video */}
      <video
        src="/home.mp4"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">

        {/* Header */}
        <header className="w-full border-b border-slate-300 px-6 py-4 flex justify-center text-white">
          <div className="flex gap-3 items-center">
            <TbArrowBigRightLinesFilled />
            <h1 className="text-sm md:text-lg font-semibold tracking-wider">
              Personal System Dashboard
            </h1>
            <TbArrowBigLeftLinesFilled />
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 flex items-center justify-center overflow-auto">

          <div className="px-3 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

            {categories.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(item.link)}
                className="rounded-2xl shadow-2xl border border-purple-900 overflow-hidden transform transition duration-300 hover:scale-105"
              >

                {/* MEDIA */}
                <div className="relative group">

                  {/* IMAGE */}
                  {item.thumbnail && (
                    <img
                      src={item.thumbnail}
                      className="w-40 h-32 lg:w-60 lg:h-52 object-cover"
                    />
                  )}

                  {/* VIDEO */}
                  {item.video && (
                    <video
                      src={item.video}
                      className="w-40 h-32 lg:w-60 lg:h-52 object-cover"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) => {
                        e.target.currentTime = 0;
                        e.target.play();
                      }}
                      onMouseLeave={(e) => {
                        e.target.pause();
                      }}
                    />
                  )}

                </div>

                {/* TITLE */}
                <div className="py-3 px-3 bg-gray-800 text-center">
                  <h2 className="font-semibold text-lg text-white">
                    {item.title}
                  </h2>
                </div>

              </div>
            ))}

          </div>

        </main>

        {/* POWER BUTTON (fixed floating) */}
        <button
          onClick={() => navigate("/shutdown")}
          className="fixed bottom-5 right-5 p-4 text-white text-xl bg-blue-500/80 backdrop-blur-md rounded-full hover:bg-red-600 hover:scale-110 transition-all duration-300 shadow-lg z-50"
        >
          <FaPowerOff />
        </button>

      </div>
    </div>
  )
}

export default Home