import React, { useState } from 'react';
import CallerInfo from './callerInfo';
import CallNotes from './callNotes';
import TroubleshootingNotes from './troubleShootingNotes';
import Details from './callerDetails';
import Controls from './controls';

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
  });

  const updateCallStateHandler = (callerInfo) => {
    setCallState(callerInfo);
  };

  return (
    <form className='bg-gray-800 mx-4 shadow-md rounded px-8 pt-6 pb-8'>
      <CallerInfo
        callState={callState}
        updateCallState={updateCallStateHandler}
      />
      <div className='flex justify-between'>
        <CallNotes
          callState={callState}
          updateCallState={updateCallStateHandler}
        />
        <TroubleshootingNotes
          callState={callState}
          updateCallState={updateCallStateHandler}
        />
      </div>
      <Details callState={callState} updateCallState={updateCallStateHandler} />
      <Controls callState={callState} />
    </form>
  );
}
