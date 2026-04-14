import React from 'react'

const LoadingScreen = ({ progress }) => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center">

      {/* Background video */}
      <video
        src="/loader.mp4"
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">

        <h1 className="text-3xl md:text-4xl font-bold tracking-widest">
          HADES HUB
        </h1>

        <p className="mt-3 text-sm md:text-base text-gray-300">
          Initializing your dashboard...
        </p>

        {/* Progress Bar */}
        <div className="mt-6 flex justify-center">
          <div className="h-1.5 w-52 md:w-60 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Percentage */}
        <p className="mt-2 text-xs text-gray-300">
          {progress}%
        </p>

      </div>
    </div>
  )
}

export default LoadingScreen