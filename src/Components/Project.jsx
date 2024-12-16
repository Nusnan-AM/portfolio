import React from 'react';
import Lockit from '../assets/projects/Lockit.jpg';
import WebEase from '../assets/projects/WebEase.png';
import healerz from '../assets/projects/healerz.png';
import infinitrax from '../assets/projects/infinitrax.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ project }) => {

 
  const {ref,inView} =useInView(
    {
      triggerOne:true,
      threshold:0.2,
    }
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: project.id * 0.2, duration: 0.5 }}
      className="bg-orange-950 shadow-lg rounded-lg overflow-hidden"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl text-slate-100 font-bold mb-2">{project.title}</h3>
        <p className="text-orange-400 mb-4">{project.description}</p>
        <button className="border-2 border-orange-600 text-orange-400 px-4 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
          Details
        </button>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const proj = [
    {
      id: 1,
      title: 'WebEase - Freelancing Platform',
      description:
        'Dynamic Web Solutions: Tailored Websites with Streamlined Maintenance for Freelancers and Tourist Guides. This solution offers owners customizable UI, order management, communication management, and comprehensive content management for their websites. I contributed order management and comprehensive content.',
      image: WebEase,
      link: 'https://github.com/Nusnan-AM',
    },
    {
      id: 2,
      title: 'HealerZ-Healthcare system ',
      description:
        'This web-based healthcare system for the university medical center is compatible with medical report maintenance, drug inventory, medical report generation, and electronic prescriptions.',
      image: healerz,
      link: 'https://github.com/Nusnan-AM',
    },
    {
      id: 3,
      title: ' InfinitraX ',
      description: 'Inventory Management System',
      image: infinitrax,
      link: 'https://github.com/Nusnan-AM',
    },
    {
      id: 4,
      title: ' Lockit - Bicycle Security System ',
      description:
        'Our pioneering bicycle security system, featuring both a mobile app and a web interface, combines fingerprint authentication, GPS tracking, and LTE communication, leveraging IoT concepts.',
      image: Lockit,
      link: 'https://github.com/Nusnan-AM',
    },
  ];

  return (
    <div className="py-12" id="project">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-4xl text-orange-500 font-bold mb-12 text-center"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mb-12 text-gray-100 text-center font-bold"
        >
          Here is a selection of projects showcasing dynamic solutions across different domains, highlighting my journey through innovation and problem-solving. These projects, developed during my undergraduate studies, reflect my dedication to applying theoretical knowledge to real-world challenges. You can explore the code and technical details of these projects on my GitHub repository, where I have documented my progress and contributions in various fields such as freelancing platforms, healthcare systems, inventory management, and IoT-based solutions.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-2">
          {proj.map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
