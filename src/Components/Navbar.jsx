import React, { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import { MdClose } from 'react-icons/md'
import { motion } from 'motion/react'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const variants = {
    open: { clipPath: 'circle(1000px at 43px 43px)' },
    transition: {
      type: 'spring'
    },
    closed: {
      clipPath: 'circle(25px at 43px 37px)',
      transition: {
        type: 'spring',
        duration: 1
      }
    }
  }

  const items = [
    { id: 1, text: 'About' },
    { id: 2, text: 'Service' },
    { id: 3, text: 'Work' },
    { id: 4, text: 'Contact' }
  ]

  return (
    <div>
      <motion.div 
       initial ={{opacity:0,y:-100}}
       animate ={{opacity:1, y:0}}
       transition={{duration:0.8}}
      className='container mx-auto hidden md:flex justify-between items-center py-5'>
        <div className='text-xl lg:text-2xl font-bold flex items-center gap-1'>
          <span className='text-white'>NUS</span>
          <span className='text-orange-600'>NAN</span>
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
      </motion.div>
      <div className='flex md:hidden justify-between'>
        <motion.div animate={menu ? 'open' : 'closed'}>
          <motion.div
            variants={variants}
            className='bg-white w-2/3 h-screen text-black fixed z-10'
            onClick={() => setMenu(prev => !prev)}
          >
            <div className='px-7 py-5'>
              {menu ? <MdClose size={30} /> : <TiThMenu size={30} />}
            </div>
            {menu && (
              <div className='flex flex-col justify-center items-center'>
                <ul className='space-y-4 text-black text-lg'>
                  {items.map(({ id, text }) => (
                    <li
                      key={id}
                      className='hover:text-orange-500 duration-200 cursor-pointer '
                    >
                      {text}
                    </li>
                  ))}
                </ul>
                <a className='text-lg bg-orange-600 hover:bg-orange-400 text-white px-3 py-2 mt-5 rounded-full'>
                  Download CV{''}
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div 
        initial ={{opacity:0,x:100,y:-100}}
        animate ={{opacity:1,x:0, y:0}}
        transition={{duration:0.8}}
        className='text-xl font-bold flex items-center gap-2 py-5 px-4'>
          <span className='text-white'>NUS</span>
          <span className='text-orange-600'>NAN</span>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
