import React from 'react';
import './App.css';
import CallerForm from './components/caller/callerForm';
import { Route, Routes } from 'react-router-dom';
import Output from './Pages/Output';
import JustHandoff from './components/JustHandoff';
import FormNav from './components/caller/formNav';

function App() {
  return (
    <div className='App bg-cyan-800'>
      <Routes>
        <Route path='/Call-Notes-App' element={<CallerForm />} />
        <Route path='/' element={<CallerForm />} />
        <Route path='/output' element={<Output />} />
        <Route path='/just-handoff' element={<JustHandoff />} />
      </Routes>
      <FormNav />
    </div>
  );
}

export default App;
