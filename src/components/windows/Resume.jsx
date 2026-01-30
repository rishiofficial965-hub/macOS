import React from 'react'
import MacWin from './MacWin'

const Resume = ({ setWindowState }) => {
  return (
    <MacWin setWindowState={setWindowState} windowKey="resume">
        <div className='h-full'>
            <embed className='h-full w-full' src="src/assets/CV_MAIN.pdf" frameBorder="0"></embed>
        </div>
    </MacWin>
  )
}

export default Resume