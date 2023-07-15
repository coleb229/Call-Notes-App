import React from 'react'
import { useLocation } from 'react-router-dom'
import FormNav from '../components/caller/formNav'
import { useState } from 'react'

const Output = (props) => {
  const location = useLocation()
  const {
    callNotes,
    callSummary,
    callerDBA,
    callerName,
    callerNumber,
    nextSteps,
  } = location.state

  const [callState, setCallState] = useState({
    resolved: true,
    ticket: true,
    followUp: false,
  })

  let listCallNotes = callNotes.split('\n')

  return (
    <div>
      <div className='w-[95%] mx-auto text-left py-5 pl-10 bg-white min-h-screen'>
        <div id='callerInfo'>
          <p className='font-semibold text-sm'>Caller Name:</p>
          <p className='text-blue-600 ml-5 pb-2'>{callerName}</p>
          <p className='font-semibold'>Caller Number:</p>
          <p className='text-blue-600 ml-5 pb-2'>{callerNumber}</p>
          <p className='font-semibold'>Caller DBA:</p>
          <p className='text-blue-600 ml-5 pb-2'>{callerDBA}</p>
          <p className='font-semibold'>Call Notes:</p>
          <ol className='list-decimal ml-10'>
            {listCallNotes.map((i) => {
              return <li className='text-md text-blue-600'>{i}</li>
            })}
          </ol>
          <p className='font-semibold'>Call Summary:</p>
          <p className='text-blue-600 ml-5 pb-2'>{callSummary}</p>
          <p className='font-semibold'>Next Steps:</p>
          <p className='text-blue-600 ml-5 pb-2'>{nextSteps}</p>
        </div>
        <div className='bg-gray-200 w-1/2 mx-auto' id='handoff'>
          <p className='mx-10 flex'>
            <p className='font-bold underline'>{callerDBA + ':'}</p>
            {callSummary}
          </p>
          <p className='mx-10'>
            <p className='font-bold'>Ticket:</p>
          </p>
        </div>
        <hr className='mt-5' /> {/* Call Log Section */}
        <div className='flex justify-around'>
          <div className='w-1/3 align'>
            <div className='flex pt-10'>
              <label
                className='text-left text-xs font-semibold my-2'
                htmlFor='resolved'
              >
                Resolved:
              </label>
              <input
                type='checkbox'
                id='resolved'
                name='resolved'
                className='m-2'
                checked={callState.resolved}
                onChange={(e) =>
                  setCallState({ ...callState, resolved: e.target.checked })
                }
              />
            </div>
            <div className='flex'>
              <label
                className='text-left text-xs font-semibold my-2'
                htmlFor='ticket'
              >
                Ticket:
              </label>
              <input
                type='checkbox'
                id='ticket'
                name='ticket'
                className='m-2'
                checked={callState.ticket}
                onChange={(e) =>
                  setCallState({ ...callState, ticket: e.target.checked })
                }
              />
            </div>
            <div className='flex'>
              <label
                className='text-left text-xs font-semibold my-2'
                htmlFor='followUp'
              >
                FollowUp:
              </label>
              <input
                type='checkbox'
                id='followUp'
                name='followUp'
                className='m-2'
                checked={callState.followUp}
                onChange={(e) =>
                  setCallState({ ...callState, followUp: e.target.checked })
                }
              />
            </div>
          </div>
          <div className='p-10 w-full mx-auto bg-white rounded text-xs text-left'>
            <h2>Merchant: {callerDBA}</h2>
            <h2>Reason: {callSummary}</h2>
            <h2>Phone: {callerNumber}</h2>
            <h2>Resolved: {callState.resolved ? 'Yes' : 'No'}</h2>
            <h2>Ticket: {callState.ticket ? 'Yes' : 'No'}</h2>
            <h2>Follow Up: {callState.followUp ? 'Yes' : 'No'}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Output
