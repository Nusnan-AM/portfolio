import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='bg-[#1d0000]'>
     <Navbar/>
     <Hero/>
     <About/>
     <Footer />
    </div>
  )
}

export default App
