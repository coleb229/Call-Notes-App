import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JustHandoff = () => {
  const [callState, setCallState] = useState({
    callerDBA: '',
    callSummary: '',
    ticket: '',
  });

  const updateCallStateHandler = (callerInfo) => {
    setCallState(callerInfo);
  };

  return (
    <div className='h-[95vh]'>
      <HandoffForm
        callState={callState}
        updateCallState={updateCallStateHandler}
      />
      <HandoffOutput callState={callState} />
    </div>
  );
};

const HandoffForm = (props) => {
  const callerState = Object.assign({}, props.callState);

  const ref = React.useRef(null);
  /*
  const resetForm = (e) => {
    null;
  };
*/
  return (
    <form className='bg-gray-800 mx-4 shadow-md rounded px-8 pt-6 pb-8 max-h-screen'>
      <label
        className='text-left block text-white text-sm font-bold my-2'
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
        ref={ref}
        placeholder='Business Name'
        className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />

      <label
        className='text-left block text-white text-sm font-bold my-2'
        htmlFor='summary'
      >
        Summary:
      </label>
      <input
        type='text'
        value={callerState.callSummary}
        onChange={(e) => {
          callerState.callSummary = e.target.value;
          props.updateCallState(callerState);
        }}
        id='summary'
        ref={ref}
        placeholder='Summary of interaction'
        className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />

      <label
        className='text-left block text-white text-sm font-bold my-2'
        htmlFor='ticket'
      >
        Ticket:
      </label>
      <input
        type='text'
        value={callerState.ticket}
        onChange={(e) => {
          callerState.ticket = e.target.value;
          props.updateCallState(callerState);
        }}
        id='ticket'
        ref={ref}
        placeholder='CRM Ticket link'
        className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
      <button
        onClick={null}
        className='text-white font-semibold text-lg py-5 hover:text-slate-300'
      >
        Click me
      </button>
    </form>
  );
};

const HandoffOutput = (props) => {
  const { callerDBA, callSummary, ticket } = props.callState;

  return (
    <div className='bg-gray-200 w-1/2 mx-auto' id='handoff'>
      <p className='mx-10 flex'>
        <p className='font-bold underline'>{callerDBA + ':'}</p>
        {callSummary}
      </p>
      <p className='text-left mx-10'>
        <p className='font-bold inline-block'>Ticket: </p>
        {ticket}
      </p>
    </div>
  );
};

export default JustHandoff;
