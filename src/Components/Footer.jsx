import React from 'react'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOne: true,
    threshold: 0.2
  })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0}}
      animate={inView ? { opacity: 1} : 0}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <span class='block text-sm text-orange-500 sm:text-center dark:text-orange-400 m-7'>
        © 2023{' '}
        <a href='https://nusnan.netlify.app/' class='hover:underline'>
          Nusnan™
        </a>
        . All Rights Reserved.
      </span>
    </motion.div>
  )
}

export default Footer
