import React from 'react';

export default function CallerInfo(props) {
  const callerState = Object.assign({}, props.callState);
  return (
    <div className='w-full'>
      <div className='flex justify-around'>
        <div className='w-[95%] px-5'>
          <label
            className='text-left block text-white text-sm font-bold mb-2'
            htmlFor='callerName'
          >
            Name of caller:
          </label>
          <input
            type='text'
            value={callerState.callerName}
            onChange={(e) => {
              callerState.callerName = e.target.value;
              props.updateCallState(callerState);
            }}
            id='callerName'
            placeholder='John Doe'
            className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='w-[95%] px-5'>
          <label
            className='text-left block text-white text-sm font-bold mb-2'
            htmlFor='callerNumber'
          >
            Phone Number:
          </label>
          <input
            type='text'
            value={callerState.callerNumber}
            onChange={(e) => {
              callerState.callerNumber = e.target.value;
              props.updateCallState(callerState);
            }}
            id='callerNumber'
            placeholder='(123) 456-7890'
            className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='w-[95%] px-5'>
          <label
            className='text-left block text-white text-sm font-bold mb-2'
            htmlFor='dba'
          >
            DBA:
          </label>
          <input
            type='text'
            value={callerState.callerDBA}
            onChange={(e) => {
              callerState.callerDBA = e.target.value;
              props.updateCallState(callerState);
            }}
            id='dba'
            placeholder='Business Name'
            className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
      </div>
    </div>
  );
}
