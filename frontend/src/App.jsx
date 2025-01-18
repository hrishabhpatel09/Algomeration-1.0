import { useState } from 'react'
import SnellensTest from './components/SnellensTest.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
