import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import AboutMe from './Container/About/AboutMe'
import Projects from './Container/Projects/Projects'
import Contact from './Container/ContactMe/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
