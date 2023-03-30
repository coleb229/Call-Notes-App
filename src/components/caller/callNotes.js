import React from 'react';

export default function CallNotes(props) {
  const callerState = Object.assign({}, props.callState);

  return (
    <div className='h-[60vh] w-[98%] mx-auto px-2'>
      <label
        className='text-left block text-white text-sm font-bold my-2'
        htmlFor='callerName'
      >
        Call Notes:
      </label>
      <textarea
        value={callerState.callNotes}
        onChange={(e) => {
          callerState.callNotes = e.target.value;
          props.updateCallState(callerState);
        }}
        id='notes'
        type='text'
        className='h-full mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
    </div>
  );
}
