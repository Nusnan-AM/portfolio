import React, { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const items = [
    { id: 1, text: 'About' },
    { id: 2, text: 'Service' },
    { id: 3, text: 'Work' },
    { id: 4, text: 'Contact' }
  ]

  return (
    <div>
      <div className='container mx-auto hidden md:flex justify-between items-center py-5'>
        <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
          <span className='text-white'>Nus</span>
          <span className='text-orange-600'>Nan</span>
        </div>
        <div>
          <ul className='hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white cursor-pointer'>
            {items.map(({ id, text }) => (
              <li key={id}>{text}</li>
            ))}
          </ul>
        </div>
        <a className='md:text-base lg:text-lg bg-orange-600 hover:bg-orange-400 text-white px-4 py-2 rounded-full cursor-pointer'>
          Download CV{''}
        </a>
      </div>
      <div className='flex md:hidden justify-between'>
        <div>
          <div
            className='bg-white w-2/3 h-screen text-black fixed z-10'
            onClick={() => setMenu(prev => !prev)}
          >
            <div className='px-7 py-5'>
              {menu ? <TiThMenu size={30} /> : <MdClose size={30} />}
            </div>
            {!menu && (
              <div className='flex flex-col'>
                <ul>
                  {items.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                  ))}
                </ul>
                <a className='text-lg bg-orange-500 hover:bg-orange-400 text-white cursor-pointer px-3 py-2 mt-6 rounded-full'>
          Download CV{''}
        </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
