export default function Preview(props) {
  const {
    backgroundInformation,
    callNotes,
    callSummary,
    callerDBA,
    callerName,
    callerNumber,
    nextSteps,
    troubleshootingNotes,
  } = props.callState

  let listCallNotes = callNotes.split('\n')
  let listTroubleshootingSteps = troubleshootingNotes.split('\n')

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
        className='text-left bg-white rounded pt-10 pl-4 h-full overflow-y-scroll'
      >
        <p className='font-semibold text-sm'>Caller Name:</p>
        <p className='text-blue-600 ml-5 pb-2'>{callerName}</p>
        <p className='font-semibold text-sm'>Caller Number:</p>
        <p className='text-blue-600 ml-5 pb-2'>{callerNumber}</p>
        <p className='font-semibold text-sm'>Caller DBA:</p>
        <p className='text-blue-600 ml-5 pb-2'>{callerDBA}</p>
        <p className='font-semibold text-sm'>Background Information:</p>
        <p className='text-blue-600 ml-5 pb-2'>{backgroundInformation}</p>
        <p className='font-semibold text-sm'>Call Notes:</p>
        <ol className='list-decimal ml-10'>
          {listCallNotes.map((i) => {
            return <li className='text-md text-blue-600'>{i}</li>
          })}
        </ol>
        <p className='font-semibold text-sm'>Call Summary:</p>
        <p className='text-blue-600 ml-5 pb-2'>{callSummary}</p>
        <p className='font-semibold text-sm'>Troubleshooting Notes:</p>
        <ol className='list-decimal ml-10'>
          {listTroubleshootingSteps.map((i) => {
            return <li className='text-md text-blue-600'>{i}</li>
          })}
        </ol>
        <p className='font-semibold text-sm'>Next Steps:</p>
        <p className='text-blue-600 ml-5 pb-2'>{nextSteps}</p>
        <div className='bg-gray-200 w-1/2 mx-auto' id='handoff'>
          <p className='mx-10 flex'>
            <p className='font-bold underline'>{callerDBA + ':'}</p>
            {callSummary}
          </p>
          <p className='mx-10'>
            <p className='font-bold'>Ticket:</p>
          </p>
        </div>
      </div>
    </div>
  )
}
