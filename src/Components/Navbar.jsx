import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='container mx-auto hidden md:flex justify-between items-center py-6'>
        <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
          <span className='text-white'>Nus</span>
          <span className='text-orange-600'>Nan</span>
        </div>
        <div className="flex items-center text-white">
  <ul className="flex space-x-4">
    <li className="hover:text-gray-300 cursor-pointer">About</li>
    <li className="hover:text-gray-300 cursor-pointer">Service</li>
    <li className="hover:text-gray-300 cursor-pointer">Work</li>
    <li className="hover:text-gray-300 cursor-pointer">Contact</li>
  </ul>
</div>
        <a>Download CV</a>
      </div>
    </div>
  )
}

export default Navbar
