import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import AboutMe from './Container/About/AboutMe'
import Projects from './Container/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
   <Projects/>
   
    </>
  )
}

export default App
