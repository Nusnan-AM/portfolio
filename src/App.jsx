import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import Skills from './Components/Skills'

const App = () => {
  return (
    <div className='bg-[#1d0000]'>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Footer />
    </div>
  )
}

export default App
