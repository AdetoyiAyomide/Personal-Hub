import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShutDownLoadingScreen = () => {
    const navigate = useNavigate()
  return (
    <div className='fixed inset-0 w-full h-screen overflow-hidden flex items-center justify-center'>

        {/* background video */}
        <video src="/car.mp4" className='absolute inset-0 w-full h-full object-cover object-[center_top]' autoPlay loop muted playsInline></video>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white items-center">
        <h1 className="text-4xl font-bold tracking-widest">
          HADES HUB
        </h1>

        <button onClick={() => navigate("/home")} className='rounded-2xl bg-blue-500 hover:bg-green-800 flex items-center p-3 w-full my-3 justify-center'>Login</button>
        </div>
    </div>
  )
}

export default ShutDownLoadingScreen
