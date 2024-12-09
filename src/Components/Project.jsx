import React from 'react';
import aws from '../assets/skill/aws.png'; 
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer';



const Project = () => {
  const proj = [
    {
      id: 1,
      title: "Hello",
      description: "Example description for project 1.",
      image: aws, 
      link: "#",
    },
    {
      id: 2,
      title: "Hello Again",
      description: "Example description for project 2.",
      image: aws,
      link: "#",
    },
    {
      id: 3,
      title: "Final Hello",
      description: "Example description for project 3.",
      image: aws,
      link: "#",
    },
  ];
const {ref,inView} =useInView(
  {
    triggerOne:true,
    threshold:0.2,
  }
)
  return (
    <div className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2 
        ref={ref}
        initial={{opacity:0,y:100}}
        animate ={inView ? {opacity:1,y:0}:{}}
        transition={{delay:0.3,duration:0.5}}
        className='text-4xl text-orange-500 font-bold mb-12 text-center'>My Projects</motion.h2>
        <motion.p
         ref={ref}
         initial={{opacity:0,y:100}}
         animate ={inView ? {opacity:1,y:0}:{}}
         transition={{delay:0.5,duration:0.5}}
        className='mb-12 text-gray-100 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          veniam neque omnis quod. Molestiae cupiditate laudantium fuga
          inventore quaerat doloribus, dolorem temporibus, consequatur quo
          voluptatibus accusamus facere quidem debitis odio.
        </motion.p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {proj.map((project) => (
            <motion.div 
            ref={ref}
            initial={{opacity:0,y:50}}
            animate ={inView ? {opacity:1,y:0}:{}}
            transition={{delay:project.id *0.2,duration:0.5}}
            key={project.id} className='bg-orange-950 shadow-lg rounded-lg overflow-hidden'>
              <img src={project.image} className='w-full h-48 object-cover' />
              <div className='p-6'>
                <h3 className='text-xl text-slate-100 font-bold mb-2'>{project.title}</h3>
                <p className='text-orange-400 mb-4' >{project.description}</p>
                <button className='border-2 border-orange-600 text-orange-400 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition'>
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
