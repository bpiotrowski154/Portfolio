import React from 'react'
import SOS from '../assets/sosimg.png'
import Capstone from '../assets/capstoneimg.png'
import ColorDarkGreen from '../assets/color183d3d.png'


const projects = [
    {
        imageURL: SOS,
        backURL: ColorDarkGreen,
        gitURL: "https://github.com/bpiotrowski154/SOS-Board-Game",
        demoURL: "/",
        name: "SOS Game"
    },
    {
        imageURL: Capstone,
        backURL: ColorDarkGreen,
        gitURL: "/",
        demoURL: "/",
        name: "Capstone Project"
    },
];

const Projects = () => {
    
  return (
    <div name='projects' className='w-full h-screen bg-[#0F0F0F]'>        
    
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#5C8374]'>Projects</p>
                <p className='py-6'>// Check out some of my projects</p>
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
                                <a href={project.demoURL}  className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 m-2 items-center'>
                                    Demo
                                </a>
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