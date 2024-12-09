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




const Skills = () => {
  return (
    <div className="container text-center">
      <h2 className='text-3xl md:text-4xl font-bold mb-8 text-orange-500'>SKILLS</h2>


    <div>
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
    </div>
  </div>
  )
}

export default Skills