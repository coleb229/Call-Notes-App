import React, { useState } from 'react'
import CallerInfo from './callerInfo'
import CallNotes from './callNotes'
import Details from './callerDetails'
import Controls from './controls'
import Preview from './preview'

export default function InputForm() {
  const [callState, setCallState] = useState({
    callerName: '',
    callerNumber: '',
    callerDBA: '',
    callNotes: '',
    troubleshootingNotes: '',
    backgroundInformation: '',
    callSummary: '',
    nextSteps: '',
  })

  const updateCallStateHandler = (callerInfo) => {
    setCallState(callerInfo)
  }

  const copyTicket = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(
      `Caller Name: ${callState.callerName}\nCaller Number: ${callState.callerNumber}\nCaller DBA: ${callState.callerDBA}\nCall Notes: \n${callState.callNotes}\nTroubleshooting Notes: ${callState.troubleshootingNotes}\nBackground Information: ${callState.backgroundInformation}\nCall Summary: ${callState.callSummary}\nNext Steps: ${callState.nextSteps}`,
    )
  }

  return (
    <form className='bg-gray-800 mx-4 shadow-md rounded px-8 pt-6 pb-8 h-[95vh]'>
      <CallerInfo
        callState={callState}
        updateCallState={updateCallStateHandler}
      />
      <div className='flex justify-between'>
        <CallNotes
          callState={callState}
          updateCallState={updateCallStateHandler}
        />
        <Preview callState={callState} />
      </div>
      <Details callState={callState} updateCallState={updateCallStateHandler} />
      <Controls callState={callState} copyToClipboard={copyTicket} />
    </form>
  )
}
