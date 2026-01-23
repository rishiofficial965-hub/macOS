import React, { Children } from 'react'
import { Rnd } from 'react-rnd'

const MacWin = ({children, setWindowState, windowKey}) => {
  const handleClose = () => {
    if (setWindowState && windowKey) {
      setWindowState(s => ({...s, [windowKey]: false}));
    }
  };

  return (
    <Rnd
    default={{
      width:"35vw",
      height:"35vh",
      x:300,
      y:200
    }}>
        <div className='bg-black/70 rounded-2xl overflow-hidden h-full overflow-hidden'>
          <div className='flex items-center px-3 py-2 backdrop-blur-md bg-white/10 shadow-lg rounded-md gap-4 border-b-1 '>
            <div className='flex gap-1.5'>
              <div onClick={handleClose} className='closed h-4 w-4 bg-red-500 rounded-full cursor-pointer'></div>
              <div className='h-4 w-4 bg-yellow-300 rounded-full cursor-pointer'></div>
              <div className='h-4 w-4 bg-green-400 rounded-full cursor-pointer'></div>
            </div>
            <div className=''>rishiranjan - zsh</div>
          </div>

          <div className='h-full p-2'>
            {children}
          </div>
        </div>
    </Rnd>
  )
}

export default MacWin