import React from 'react';
import newDp from "../assets/newDp.png";
import {motion} from 'motion/react';

const Hero = () => {
  return (
    <div className='text-white py-10 '>
      <motion.img
      initial ={{opacity:0, scale:0}}
      animate={{opacity:1,scale:1}}
      transition={{
        delay:0.5,
        duration:0.5
      }}
      src={newDp}
      className='mx-auto h-2/3 w-2/3 md:w-1/3 lg:w-1/4 '
      />
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        duration:0.5
      }}
       className='conatainer mx-auto text-center'> 
        <motion.h1
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
          delay:1,
          duration:0.5
        }}
        className='text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4'>
          My Story, In Your Way
          <motion.span 
           initial={{opacity:0,y:100}}
           animate={{opacity:1,y:0}}
           transition={{
             delay:1.2,
             duration:0.5
           }}
          className='text-orange-500'>Build your personal porfolio</motion.span>
          </motion.h1>
        
        <motion.p 
         initial={{opacity:0,y:100}}
         animate={{opacity:1,y:0}}
         transition={{
           delay:1.3,
           duration:0.5
         }}
        className='text-gray-400 text-lg mb-8'>Showcase your journey by crafting a personal portfolio</motion.p>

        <div className='flex justify-center space-x-4 mb-10'>
        <motion.button 
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{
          delay:1.5,
          duration:0.5
        }}
        className='bg-orange-500 text-white px-6 py-3 rounded-full'>Hire me</motion.button>
        <motion.button 
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={{
          delay:1.5,
          duration:0.5
        }}
        className=' text-white border-white px-6 py-3 rounded-full'>My Story</motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
