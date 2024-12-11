import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer';
import Footer from './Footer'

const Contact = () => {
  const {ref,inView} =useInView(
    {
      triggerOne:true,
      threshold:0.2,
    })
  return (
    <div id='contact'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
        <motion.h2 
        ref={ref}
        initial ={{opacity:0, y:-100}}
        animate ={inView ? {opacity:1, y:0}:0}
        transition={{delay:0.3, duration:0.5}}
        className='text-4xl font-bold text-white'>
          Let's Discuss Your<span className='text-orange-500'> Project </span>
        </motion.h2>
        <motion.p 
        ref={ref}
        initial ={{opacity:0, x:-50}}
        animate ={inView ? {opacity:1, x:0}:0}
        transition={{delay:0.2, duration:0.5}}
        className='text-slate-200 mt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          laudantium mollitia illo iure distinctio eius ab, harum ex! Explicabo
          distinctio vero ea eveniet, quod sit placeat nesciunt dolores quia
          consequatur.
        </motion.p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6'>
          <motion.div 
          ref={ref}
          initial ={{opacity:0, x:-50}}
          animate ={inView ? {opacity:1, x:0}:0}
          transition={{delay:0.2, duration:0.5}}
          className='flex items-center space-x-4'>
            <div className='bg-orange-500 p-4 rounded-full '>
              <FaPhone className='text-white w-6 h-6' />
            </div>
            <div>
              <p className='text-lg font-medium text-orange-500'>Call me</p>
              <p className='text-white'>+94767316191</p>
            </div>
          </motion.div>
          <motion.div 
          ref={ref}
          initial ={{opacity:0, x:-50}}
          animate ={inView ? {opacity:1, x:0}:0}
          transition={{delay:0.3, duration:0.5}}
          className='flex items-center space-x-4'>
            <div className='bg-orange-500 p-4 rounded-full '>
              <FaEnvelope className='text-white w-6 h-6' />
            </div>
            <div>
              <p className='text-lg font-medium text-orange-500'>Email</p>
              <p className='text-white'>nusnanam12@gmail.com</p>
            </div>
          </motion.div>
          <motion.div 
          ref={ref}
          initial ={{opacity:0, x:-50}}
          animate ={inView ? {opacity:1, x:0}:0}
          transition={{delay:0.4, duration:0.5}}
          className='flex items-center space-x-4'>
            <div className='bg-orange-500 p-4 rounded-full '>
              <FaMapMarkerAlt className='text-white w-6 h-6' />
            </div>
            <div>
              <p className='text-lg font-medium text-orange-500'>Address</p>
              <p className='text-white'>
                170A/1,Orabi Basha Road, <br />
                Sainthamaruthu-01, Sri Lanka
              </p>
            </div>
          </motion.div>
        </div>
        <motion.form 
        ref={ref}
        initial ={{opacity:0, x:-50}}
        animate ={inView ? {opacity:1, x:0}:0}
        transition={{delay:0.4, duration:0.5}}
        className='space-y-4 text-white space-x-4'>
          <div className='grid grid-cols-1 sm:grid-col-2 gap-4 '>
            <input
              type='text'
              placeholder='Full Name'
              className='border border-orange-500 bg-orange-950 p-4 rounded-md w-full'
            />
            <input
              type='email'
              placeholder='Your Email'
              className='border border-orange-500 bg-orange-950  p-4 rounded-md w-full'
            />
        
          
            <input
              type='text'
              placeholder='Phone Number'
              className='border border-orange-500 bg-orange-950 p-4 rounded-md w-full'
            />
             
          <textarea
            placeholder='Message'
            className='border border-orange-500 bg-orange-950  p-4 rounded-md w-full'
          ></textarea>

        </div>
          <motion.button
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
            type='submit'
            className=' bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition'
          >
            Submit Message
          </motion.button>
        </motion.form>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default Contact
