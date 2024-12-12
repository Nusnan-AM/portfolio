import React from 'react'
import Marquee from 'react-fast-marquee'
import Html from '../assets/skill/Html.png'
import Css from '../assets/skill/Css.png'
import Bootsrap from '../assets/skill/Bootsrap.png'
import JavaScript from '../assets/skill/JavaScript.png'
import tailwind from '../assets/skill/tailwind.png'
import typescript from '../assets/skill/typescript.png'
import react from '../assets/skill/react.png'
import redux from '../assets/skill/redux.png'
import nextjs from '../assets/skill/nextjs.png'
import java from '../assets/skill/java.png'
import python from '../assets/skill/python.png'
import aws from '../assets/skill/aws.png'
import django from '../assets/skill/django.png'
import figma from '../assets/skill/figma.png'
import docker from '../assets/skill/docker.png'
import express from '../assets/skill/express.png'
import Git from '../assets/skill/Git.png'
import github from '../assets/skill/github.png'
import postman from '../assets/skill/postman.png'
import node from '../assets/skill/node.png'
import mysql from '../assets/skill/mysql.png'
import mongodbs from '../assets/skill/mongodbs.png'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer';



const Skills = () => {

  const {ref,inView} =useInView(
    {
      triggerOne:true,
      threshold:0.2,
    }
  )
  return (
    <div className=" w-4/5 md:w-full 2xl: w-auto text-center" id='skill'> 
      <motion.h2 
        ref={ref}
        initial ={{opacity:0, y:-100}}
        animate ={inView ? {opacity:1, y:0}:0}
        transition={{delay:0.3, duration:0.5}}
      className='text-3xl md:text-4xl font-bold mb-8 text-orange-500'>SKILLS</motion.h2>


    <div>
      <motion.div
        ref={ref}
        initial={{opacity:0,y:100}}
        animate ={inView ? {opacity:1,y:0}:{}}
        transition={{delay:0.3,duration:0.5}}
      >
      <Marquee direction="right" speed={100} delay={3}>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={Html} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={Css} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={JavaScript} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={Bootsrap} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={tailwind} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={typescript} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={react} alt="" />
        </div>   
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={redux} alt="" />
        </div>  
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={nextjs} alt="" />
        </div>  
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={python} alt="" />
        </div>  
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={java} alt="" />
        </div>       
      </Marquee>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{opacity:0,x:100}}
        animate ={inView ? {opacity:1,x:0}:{}}
        transition={{delay:0.4,duration:0.5}}>
      <Marquee direction="left" speed={100} delay={5}>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl ">
          <img src={aws} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={django} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={express} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={node} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={mongodbs} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={mysql} alt="" />
        </div>
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={Git} alt="" />
        </div> 
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={github} alt="" />
        </div>  
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={postman} alt="" />
        </div>  
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={docker} alt="" />
        </div>  
        <div className="image_wrapper h-28 w-28  border border-orange-400 m-5 p-3 rounded-2xl">
          <img src={figma} alt="" />
        </div>         
      </Marquee>
      </motion.div>
    </div>
  </div>
  )
}

export default Skills