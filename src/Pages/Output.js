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

  let listCallNotes = callNotes.split('\n');
  let listTroubleshootingSteps = troubleshootingNotes.split('\n');

  return (
    <div className='w-[95%] mx-auto text-left py-5 pl-10 bg-white'>
      <div id='callerInfo'>
        <h3 className='font-semibold text-sm'>Caller Name:</h3>
        <p className='text-blue-600 ml-5 pb-2'>{callerName}</p>
        <h3 className='font-semibold'>Caller Number:</h3>
        <p className='text-blue-600 ml-5 pb-2'>{callerNumber}</p>
        <h3 className='font-semibold'>Caller DBA:</h3>
        <p className='text-blue-600 ml-5 pb-2'>{callerDBA}</p>
        <h3 className='font-semibold'>backgroundInformation:</h3>
        <p className='text-blue-600 ml-5 pb-2'>{backgroundInformation}</p>
        <h3 className='font-semibold'>Call Notes:</h3>
        <ol className='list-decimal ml-10'>
          {listCallNotes.map((i) => {
            return <li className='text-md text-blue-600'>{i}</li>;
          })}
        </ol>
        <h3 className='font-semibold'>Call Summary:</h3>
        <p className='text-blue-600 ml-5 pb-2'>{callSummary}</p>
        <h3 className='font-semibold'>troubleshootingNotes:</h3>
        <ol className='list-decimal ml-10'>
          {listTroubleshootingSteps.map((i) => {
            return <li className='text-md text-blue-600'>{i}</li>;
          })}
        </ol>
        <h3 className='font-semibold'>nextSteps:</h3>
        <p className='text-blue-600 ml-5 pb-2'>{nextSteps}</p>
      </div>
    </div>
  );
};

export default Output;
