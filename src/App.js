import React from 'react';
import './App.css';
import CallerForm from './components/caller/callerForm';
import { Route, Routes } from 'react-router-dom';
import Output from './Pages/Output';

function App() {
  return (
    <div className='App bg-cyan-800 h-screen max-h-screen'>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path={'/' || '/Call-Notes-App'} element={<CallerForm />} />
        <Route path='/output' element={<Output />} />
      </Routes>
    </div>
  );
}

export default App;
