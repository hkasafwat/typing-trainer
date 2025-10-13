import { useState } from 'react'
import './App.css'
import Keyboard from './components/Keyboard/Keyboard'

function App() {

  return (
    <>
      <div className="bg-gray-400 h-screen mx-auto flex justify-center items-center">
        <Keyboard />
      </div> 
    </>
  )
}

export default App
