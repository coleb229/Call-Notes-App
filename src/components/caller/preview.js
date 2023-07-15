import { useState } from 'react'

export default function Preview(props) {
  const {
    callNotes,
    callSummary,
    callerDBA,
    callerName,
    callerNumber,
    nextSteps,
  } = props.callState

  const [callState, setCallState] = useState({
    resolved: true,
    ticket: true,
    followUp: false,
  })

  let listCallNotes = callNotes.split('\n')

  return (
    <div className='h-[60vh] w-[98%] mx-auto px-2'>
      <label
        className='text-left block text-white text-sm font-bold my-2'
        htmlFor='preview'
      >
        Preview:
      </label>
      <div
        id='preview'
        className='text-left bg-white rounded pt-5 pl-4 h-full overflow-y-scroll'
      >
        <p className='font-semibold text-xs'>Caller Name:</p>
        <p className='text-blue-600 ml-5 pb-2 text-xs'>{callerName}</p>
        <p className='font-semibold text-xs'>Caller Number:</p>
        <p className='text-blue-600 ml-5 pb-2 text-xs'>{callerNumber}</p>
        <p className='font-semibold text-xs'>Caller DBA:</p>
        <p className='text-blue-600 ml-5 pb-2 text-xs'>{callerDBA}</p>
        <p className='font-semibold text-xs'>Call Notes:</p>
        <ol className='list-decimal ml-10'>
          {listCallNotes.map((i) => {
            return <li className='text-xs text-blue-600'>{i}</li>
          })}
        </ol>
        <p className='font-semibold text-xs'>Call Summary:</p>
        <p className='text-blue-600 ml-5 pb-2 text-xs'>{callSummary}</p>
        <p className='font-semibold text-xs'>Next Steps:</p>
        <p className='text-blue-600 ml-5 pb-2 text-xs'>{nextSteps}</p>
        <hr className='mt-5 pt-5' /> {/* Handoff Section */}
        <div className='bg-gray-200 w-5/6 mx-auto' id='handoff'>
          <p className='mx-5 flex text-xs'>
            <p className='font-bold underline text-xs'>{callerDBA + ':'}</p>
            {callSummary}
          </p>
          <p className='mx-5'>
            <p className='font-bold text-xs'>Ticket:</p>
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
