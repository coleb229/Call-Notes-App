import React from 'react'
import { Link } from 'react-router-dom'

export default function Controls(props) {
  const copyToClipboard = props.copyToClipboard
  const callState = props.callState

  return (
    <div className='flex justify-around p-5'>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        Reset
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={copyToClipboard}
      >
        Copy Ticket
      </button>
      {/*  
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Copy Handoff
      </button>
  */}
      <Link
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        to='/output'
        state={callState}
      >
        Submit
      </Link>
    </div>
  )
}
