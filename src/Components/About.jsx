import React from 'react'
import AboutImg from '../assets/AboutImg.png'

const About = () => {
  return (
    <div className='text-white py-16'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8 underline'>
          About me
        </h2>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className=' mb-8 md:mb-0  md:mr-8 flex justify-center'>
            <img src={AboutImg} className=' rounded-full w-96 h-84 sm:1/2 md:w-10/12' />
          </div>
          <p className='md:w-1/2 text-gray-300 px-4 md:px-0 text-base sm:text-lg md:text-xl'>
            I am Mohamed Nusnan, A Final-year BSc (Hons) Computer Science
            Technology undergraduate from Uva Wellassa University Sri Lanka. I
            am interested in a career that will allow me to use my background in
            web design, Full-stack development and App-development. These skills
            have driven me to pursue developer roles. I want to contribute
            innovative ways and help build future tech with the others. All
            together we can create a better connected world.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-y-6 sm:space-y-0'>
          <div className='text-center'>
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-orange-600'>
              1+
            </h3>
            <p className='text-sm sm:text-base text-gray-300'>
              Years of Data Operator Experience
            </p>
          </div>

          <div className='text-center'>
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-orange-600'>
              5+
            </h3>
            <p className='text-sm sm:text-base text-gray-300'> Customer</p>
          </div>

          <div className='text-center'>
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-orange-600'>
              15+
            </h3>
            <p className='text-sm sm:text-base text-gray-300'>
              {' '}
              Projects I have made
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
