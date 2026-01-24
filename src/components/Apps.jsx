import React from 'react'
import photo from '../assets/desktop-icons.json'

const Apps = () => {
  return (<>
    <div className='flex flex-col gap-5 absolute top-16 left-3 px-2 py-2'>
        {photo.map((photo, index) => (
           <div className='flex flex-col items-center gap-1 w-20 cursor-pointer' key={index}>
             <div className='w-15 h-15 rounded-3xl overflow-hidden'>
               <img className='h-full w-full object-cover' src={photo.icon} alt={photo.name} />
             </div>
             <p className='text-sm font-semibold text-center text-white truncate w-full'>{photo.name}</p>
           </div>
        ))}
    </div>
    </>
  )
}

export default Apps