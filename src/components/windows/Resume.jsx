import React from 'react'
import MacWin from './MacWin'

const Resume = () => {
  return (
    <MacWin>
        <div className='h-full'>
            <embed className='h-full w-full' src="/CV_MAIN.pdf" frameBorder="0"></embed>
        </div>
    </MacWin>
  )
}

export default Resume