import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-[#1d0000]'>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
     <Footer />
    </div>
  )
}

export default App
