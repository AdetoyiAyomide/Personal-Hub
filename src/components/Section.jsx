import React from 'react'

const Section = ({
  children,
  image = "/container.jpeg",
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-md shadow-2xl ${className}`}
    >

      {/* Rotated background */}
      <div className="absolute inset-0 scale-110">
        <img
          src={image}
          className="w-full h-full object-cover rotate-1 origin-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        {children}
      </div>

    </div>
  )
}

export default Section