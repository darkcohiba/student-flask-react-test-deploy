import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


    // deployed fetch
    // https://flask-student-jo7j.onrender.com/
    useEffect(()=>{
      fetch('https://flask-student-jo7j.onrender.com/api/students')
      .then(response => response.json())
      .then(data => console.log(data))
    },[])
  // deployed fetch
  // http://0.0.0.0:10000
  useEffect(()=>{
    fetch('http://0.0.0.0:10000/api/students')
    .then(response => response.json())
    .then(data => console.log(data))
  },[])
  // local fetch
  // useEffect(()=>{
  //   fetch('http://127.0.0.1:8000/api/students')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // },[])

  return (
    <>
      <p>App Page</p>
    </>
  )
}

export default App
