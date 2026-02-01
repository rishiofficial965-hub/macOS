import React from 'react'
import MacWin from './MacWin'
import resumePdf from '../../assets/CV_MAIN.pdf'

const Resume = ({ setWindowState }) => {
  return (
    <MacWin setWindowState={setWindowState} windowKey="resume" title="Resume">
        <div className='h-full'>
            <embed className='h-full w-full' src={resumePdf} frameBorder="0"></embed>
        </div>
    </MacWin>
  )
}

export default Resume