import React from 'react';
import { useLocation } from 'react-router-dom';

const Output = () => {
  const location = useLocation();
  const {
    backgroundInformation,
    callNotes,
    callSummary,
    callerDBA,
    callerName,
    callerNumber,
    nextSteps,
    troubleshootingNotes,
  } = location.state.callState;

  console.log(backgroundInformation);

  return (
    <div className='w-[95%] mx-auto text-left py-5 pl-10 bg-white'>
      <div id='callerInfo'>
        <h2 className='font-semibold'>Caller Name:</h2>
        <p className='text-blue-600 font-bold'>{callerName}</p>
        <h2 className='font-semibold'>Caller Number:</h2>
        <p className='text-blue-600 font-bold'>{callerNumber}</p>
        <h2 className='font-semibold'>Caller DBA:</h2>
        <p className='text-blue-600 font-bold'>{callerDBA}</p>
        <h2 className='font-semibold'>backgroundInformation:</h2>
        <p className='text-blue-600 font-bold'>{backgroundInformation}</p>
        <h2 className='font-semibold'>Call Notes:</h2>
        <p className='text-blue-600 font-bold'>{callNotes}</p>
        <h2 className='font-semibold'>Call Summary:</h2>
        <p className='text-blue-600 font-bold'>{callSummary}</p>
        <h2 className='font-semibold'>troubleshootingNotes:</h2>
        <p className='text-blue-600 font-bold'>{troubleshootingNotes}</p>
        <h2 className='font-semibold'>nextSteps:</h2>
        <p className='text-blue-600 font-bold'>{nextSteps}</p>
      </div>
    </div>
  );
};

export default Output;
