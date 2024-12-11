import React from 'react'
import AboutImg from '../assets/AboutImg.png'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  })
  return (
    <div className='text-white py-16' id='about'>
      <div className='container mx-auto px-4 text-center'>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold mb-8 text-orange-500'
        >
          Who I am
        </motion.h2>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className=' mb-8 md:mb-0  md:mr-8 flex justify-center'
          >
            <img
              src={AboutImg}
              className=' rounded-full w-58 h-48 sm:1/2 md:w-10/12'
            />
          </motion.div>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='md:w-1/2 text-gray-300 px-4 md:px-0 text-base sm:text-lg md:text-xl'
          >
            I am Mohamed Nusnan, An aspiring and self-motivated final year
            undergraduate pursuing a degree in Computer Science and Technology
            at Uva Wellassa University of Sri Lanka. Currently learning and
            practicing in the area of Machine Learning, Data Analysis and
            full-stack development. Interested in Web development. Excited to
            contribute to the company's success by applying my technical skills
            and academic expertise to create strong and effective software
            solutions that drive the organization towards better business
            outcomes. Let's connect and collaborate to make a positive impact
            together!
          </motion.p>
        </div>
        <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.3 }}
            className='text-center'
          >
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-orange-600'>
              2+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.7, duration: 0.5 }}
              className='text-sm sm:text-base text-gray-300'
            >
              Years of Data Operator Experience
            </motion.p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.3 }}
            className='text-center'
          >
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-orange-600'>
              10+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.5 }}
              className='text-sm sm:text-base text-gray-300'
            >
              Customers
            </motion.p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.3 }}
            className='text-center'
          >
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-orange-600'>
              15+
            </h3>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.9, duration: 0.5 }}
              className='text-sm sm:text-base text-gray-300'
            >
              {' '}
              Projects I have made
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
