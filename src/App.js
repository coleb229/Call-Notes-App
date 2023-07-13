import React from 'react'
import './App.css'
import CallerForm from './components/caller/callerForm'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import Output from './Pages/Output'
import JustHandoff from './components/JustHandoff'
import FormNav from './components/caller/formNav'
import Rekey from './components/Rekey'
import CallLog from './components/CallLog'
import ErrorPage from './Pages/404'

function App() {
  useEffect(() => {
    document.title = 'Template App'
  }, [])

  return (
    <div className='App bg-cyan-800 max-h-screen'>
      <Routes>
        <Route path='/Call-Notes-App' element={<CallerForm />} />
        <Route path='/' element={<CallerForm />} />
        <Route path='/output' element={<Output />} />
        <Route path='/just-handoff' element={<JustHandoff />} />
        <Route path='/rekey' element={<Rekey />} />
        <Route path='call-log' element={<CallLog />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <FormNav />
    </div>
  )
}

export default App
