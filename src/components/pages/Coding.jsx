import React from 'react'
import { codingLinks} from '../../data/data'

const Coding = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 items-stretch'>
      {codingLinks.map((link) => (
  <div
    key={link.id}
    onClick={() => window.open(link.link, "_blank")}
    className="
      flex flex-row md:flex-col
      rounded-2xl shadow h-full md:min-h-65
      overflow-hidden cursor-pointer
      hover:scale-[1.02] transition
    "
  >
    {/* IMAGE */}
    <img
      src={link.thumbnail}
      className="
        w-40 shrink-0 h-32 object-cover
        md:w-full md:h-47
      "
    />

    {/* CONTENT */}
    <div className="h-full w-full min-w-0 p-2 md:rounded-b-2xl bg-gray-900 flex flex-col md:block">
      <h2 className="text-white font-semibold text-lg md:text-xl">
        {link.title}
      </h2>

      <p className="text-xs text-slate-300 truncate md:whitespace-normal">
        {link.subtitle}
      </p>
    </div>
  </div>
))}
    </div>
  )
}

export default Coding
