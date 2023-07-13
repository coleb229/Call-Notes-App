export default function Preview(props) {
  const {
    callNotes,
    callSummary,
    callerDBA,
    callerName,
    callerNumber,
    nextSteps,
  } = props.callState

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
        <div className='bg-gray-200 w-5/6 mx-auto' id='handoff'>
          <p className='mx-5 flex text-xs'>
            <p className='font-bold underline text-xs'>{callerDBA + ':'}</p>
            {callSummary}
          </p>
          <p className='mx-5'>
            <p className='font-bold text-xs'>Ticket:</p>
          </p>
        </div>
      </div>
    </div>
  )
}
