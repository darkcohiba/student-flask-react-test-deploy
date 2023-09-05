import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useEffect(()=>{
    fetch('/api/students')
    .then(response => response.json())
    .then(data => console.log(data))
  },[])

  return (
    <>
      <p>App Page</p>
    </>
  )
}

export default App
