import React, { useEffect } from 'react'
import SOS from '../assets/sosimg.png'
import Capstone from '../assets/capstoneimg.png'
import Calendar from '../assets/calendarimg.png'
import ColorDarkGreen from '../assets/color183d3d.png'
import {Link} from 'react-router-dom'


const projects = [
    {
        imageURL: SOS,
        backURL: ColorDarkGreen,
        gitURL: "https://github.com/bpiotrowski154/SOS-Board-Game",
        demoURL: "../sos",
        name: "SOS Game"
    },
    {
        imageURL: Capstone,
        backURL: ColorDarkGreen,
        gitURL: "https://github.com/bpiotrowski154/capstone",
        demoURL: "../capstone",
        name: "Capstone Project"
    },
    {
        imageURL: Calendar,
        backURL: ColorDarkGreen,
        gitURL: "https://github.com/bpiotrowski154/HumanComputerInterfaceFinal",
        demoURL: "../calendar",
        name: "To-Do Calendar"
    },
];

const Projects = () => {
  return (
    <div name='projects' className='w-full min-h-screen flex flex-col justify-center items-center p-4'>        
        <div className='h-[80px]'></div>
    
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#5C8374]'>Projects</p>
                <p className='text-xl py-6'>// Check out some of my projects</p>
            </div>

            {/* Projects Grid Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4' >
                
                {/* Grid Item */}
                {projects.map((project, index) => (
                    <div 
                        key = {index} 
                        style={{backgroundImage: `url(${project.imageURL})`}} 
                        className='group container rounded-md flex justify-center text-center items-center mx-auto content-div'
                    >

                        {/* Hover Effect for Images */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div className='text-2xl font-medium tracking-wider'>
                                {project.name}
                            </div>
                            <div className='pt-8 text-center'>
                                <Link to={project.demoURL} smooth={true} duration={500} className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 m-2 items-center'>Demo</Link>
                                <a href={project.gitURL} target='_blank' className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 m-2 items-center'>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects