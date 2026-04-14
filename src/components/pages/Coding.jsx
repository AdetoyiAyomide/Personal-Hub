import React from 'react'
import { codingLinks} from '../../data/data'

const Coding = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 items-stretch'>
      {codingLinks.map((link) => (
        <div key={link.id} onClick={() => window.open(link.link, "_blank")} className='rounded-2xl shadow border h-full'>
          {/* thumbnail */}
          <img src={link.thumbnail} className="w-full h-32 rounded-t-2xl lg:h-52 object-cover" />

          {/* title */}
          <div className='p-1 pb-2 bg-gray-900 rounded-b-2xl'>
          <h2 className='text-white font-semibold text-2xl'>{link.title}</h2>
          <p className='text-xs text-slate-300 truncate'>{link.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Coding
