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
        <p className='font-semibold text-sm'>Caller Name:</p>
        <p className='text-blue-600 ml-5 pb-2'>{callerName}</p>
        <p className='font-semibold'>Caller Number:</p>
        <p className='text-blue-600 ml-5 pb-2'>{callerNumber}</p>
        <p className='font-semibold'>Caller DBA:</p>
        <p className='text-blue-600 ml-5 pb-2'>{callerDBA}</p>
        <p className='font-semibold'>backgroundInformation:</p>
        <p className='text-blue-600 ml-5 pb-2'>{backgroundInformation}</p>
        <p className='font-semibold'>Call Notes:</p>
        <ol className='list-decimal ml-10'>
          {listCallNotes.map((i) => {
            return <li className='text-md text-blue-600'>{i}</li>;
          })}
        </ol>
        <p className='font-semibold'>Call Summary:</p>
        <p className='text-blue-600 ml-5 pb-2'>{callSummary}</p>
        <p className='font-semibold'>troubleshootingNotes:</p>
        <ol className='list-decimal ml-10'>
          {listTroubleshootingSteps.map((i) => {
            return <li className='text-md text-blue-600'>{i}</li>;
          })}
        </ol>
        <p className='font-semibold'>nextSteps:</p>
        <p className='text-blue-600 ml-5 pb-2'>{nextSteps}</p>
      </div>
      <div id='handoff'>
        <p className='mx-10 flex'>
          <p className='font-bold underline'>{callerDBA + ':'}</p>
          {callSummary}
        </p>
        <p className='mx-10'>
          <p className='font-bold'>Ticket:</p>
        </p>
      </div>
    </div>
  );
};

export default Output;
