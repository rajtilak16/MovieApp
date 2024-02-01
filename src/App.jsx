import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Show from './components/Show'
import Card from './components/Card'
import Form from './components/Form'
 function App() {

  return (
    <div>
       <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/shows" element={<Show />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/form/:id" element={<Form />} />
       </Routes>
    </div>
  )
}

export default App
