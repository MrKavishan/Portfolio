import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import AboutMe from './Container/About/AboutMe'
import Skills from './Container/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
   
    </>
  )
}

export default App
