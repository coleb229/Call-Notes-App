import React from 'react';

export default function Details(props) {
  const callerState = Object.assign({}, props.callState);

  return (
    <div className='flex w-full pt-14'>
      <div className='w-[95%] mx-2 h-full'>
        <label
          className='text-left block text-white text-sm font-bold my-2'
          htmlFor='callerName'
        >
          Background info:
        </label>
        <textarea
          value={callerState.backgroundInformation}
          onChange={(e) => {
            callerState.backgroundInformation = e.target.value;
            props.updateCallState(callerState);
          }}
          id='bg-info'
          className='h-full mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='w-[95%] mx-2 h-full'>
        <label
          className='text-left block text-white text-sm font-bold my-2'
          htmlFor='callerName'
        >
          Summary:
        </label>
        <textarea
          value={callerState.callSummary}
          onChange={(e) => {
            callerState.callSummary = e.target.value;
            props.updateCallState(callerState);
          }}
          id='summary'
          className='h-full mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='w-[95%] mx-2 h-full'>
        <label
          className='text-left block text-white text-sm font-bold my-2'
          htmlFor='callerName'
        >
          Next steps:
        </label>
        <textarea
          value={callerState.nextSteps}
          onChange={(e) => {
            callerState.nextSteps = e.target.value;
            props.updateCallState(callerState);
          }}
          id='next-steps'
          className='h-full mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
    </div>
  );
}
