import React from 'react'
import photo from '../assets/desktop-icons.json'
import thisPcIcon from '../assets/desktop-icons/this-pc.png'
import hpSupportIcon from '../assets/desktop-icons/hp-support.png'
import edgeIcon from '../assets/desktop-icons/edge.png'
import chromiumIcon from '../assets/desktop-icons/chromium.png'
import recycleBinIcon from '../assets/desktop-icons/recycle-bin.png'
import pythonIcon from '../assets/desktop-icons/python.png'

const iconMap = {
  'this-pc': thisPcIcon,
  'hp-support': hpSupportIcon,
  'edge': edgeIcon,
  'chromium': chromiumIcon,
  'recycle-bin': recycleBinIcon,
  'python': pythonIcon
}

const Apps = () => {
  return (<>
    <div className='flex flex-col gap-5 absolute top-16 left-3 px-2 py-2'>
        {photo.map((photo, index) => (
           <div className='flex flex-col items-center gap-1 w-20 cursor-pointer hover:scale-105 transition-transform transition-all duration-200' key={index}>
             <div className='w-15 h-15 rounded-3xl overflow-hidden'>
               <img className='h-full w-full object-cover' src={iconMap[photo.id]} alt={photo.name} />
             </div>
             <p className='text-sm font-semibold text-center text-white truncate w-full'>{photo.name}</p>
           </div>
        ))}
    </div>
    </>
  )
}

export default Apps