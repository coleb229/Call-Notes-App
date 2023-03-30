import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// page imports
import Output from './Pages/Output';

let callerName = '';
let callerNumber = 0;

// USE STATE TO PUSH OUTPUT TO THE NEW ROUTE

function App() {
  useEffect(() => {
    document.title = 'Note Formatter';
  }, []);

  const [name, setName] = useState('');

  return (
    <div className='App bg-cyan-800 h-screen max-h-screen'>
      <Routes>
        <Route path='/' element={<InputForm />} />
        <Route path='/output' element={<Output name={callerName} />} />
      </Routes>
    </div>
  );
}

const InputForm = () => {
  return (
    <form className='bg-gray-800 mx-4 shadow-md rounded px-8 pt-6 pb-8'>
      <CallerInfo />
      <div className='flex justify-between'>
        <CallNotes />
        <TroubleshootingNotes />
      </div>
      <Details />
      <Controls />
    </form>
  );
};

const CallerInfo = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-around'>
        <div className='w-[95%] px-5'>
          <label
            className='text-left block text-white text-sm font-bold mb-2'
            for='callerName'
          >
            Name of caller:
          </label>
          <input
            type='text'
            id='callerName'
            placeholder='John Doe'
            className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='w-[95%] px-5'>
          <label
            className='text-left block text-white text-sm font-bold mb-2'
            for='callerNumber'
          >
            Phone Number:
          </label>
          <input
            type='text'
            id='callerNumber'
            placeholder='(123) 456-7890'
            className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='w-[95%] px-5'>
          <label
            className='text-left block text-white text-sm font-bold mb-2'
            for='dba'
          >
            DBA:
          </label>
          <input
            type='text'
            id='dba'
            placeholder='Business Name'
            className='mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
      </div>
    </div>
  );
};

const CallNotes = () => {
  return (
    <div className='h-[60vh] w-[98%] mx-auto px-2'>
      <label
        className='text-left block text-white text-sm font-bold my-2'
        for='callerName'
      >
        Call Notes:
      </label>
      <textarea
        id='notes'
        type='text'
        className='h-full mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
    </div>
  );
};

const TroubleshootingNotes = () => {
  return (
    <div className='h-[60vh] w-[98%] mx-auto px-2'>
      <label
        className='text-left block text-white text-sm font-bold my-2'
        for='callerName'
      >
        Troubleshooting Steps:
      </label>
      <textarea
        id='notes'
        type='text'
        className='h-full mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
    </div>
  );
};

const Details = () => {
  return (
    <div className='flex w-full pt-14'>
      <div className='w-[95%] mx-2 h-full'>
        <label
          className='text-left block text-white text-sm font-bold my-2'
          for='callerName'
        >
          Background info:
        </label>
        <textarea
          id='bg-info'
          className='h-full mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='w-[95%] mx-2 h-full'>
        <label
          className='text-left block text-white text-sm font-bold my-2'
          for='callerName'
        >
          Summary:
        </label>
        <textarea
          id='summary'
          className='h-full mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='w-[95%] mx-2 h-full'>
        <label
          className='text-left block text-white text-sm font-bold my-2'
          for='callerName'
        >
          Next steps:
        </label>
        <textarea
          id='next-steps'
          className='h-full mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
    </div>
  );
};

const Controls = () => {
  return (
    <div className='flex justify-around p-5'>
      <button class='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
        Reset
      </button>
      <button class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Export
      </button>
      <button
        class='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleSubmit}
      >
        <Link to='/output'>Submit</Link>
      </button>
    </div>
  );
};

function handleExport() {
  return;
}

function handleSubmit() {}

export default App;
