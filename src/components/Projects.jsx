import React, {useState} from 'react'
import SOS from '../assets/sosimg.png'
import Capstone from '../assets/capstoneimg.png'
import ColorMedGreen from '../assets/color5c8374.png'
import ColorDarkGreen from '../assets/color183d3d.png'
import ColorLightGreen from '../assets/color93b1a6.png'
import ReactCardFlip from 'react-card-flip'

const Projects = () => {
    const [flip, setFlip] = useState(false);
  return (
    <div name='projects' className='w-full md:h-screen bg-[#0F0F0F]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#5C8374]'>Projects</p>
                <p className='py-6'>// Check out some of my projects</p>
            </div>

            {/* Projects Grid Container */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4' >
                
                {/* Projects Grid Item */}
                <ReactCardFlip isFlipped={flip} flipDirection='horizontal'>
                    <div onClick={() => setFlip(!flip)} style={{backgroundImage: `url(${SOS})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div2 hover:cursor-pointer'></div>
                    <div onClick={() => setFlip(!flip)} style={{backgroundImage: `url(${ColorDarkGreen})`}} 
                         className='container rounded-md flex flex-col justify-center items-center mx-auto hover:cursor-pointer content-div2 text-[#93B1A6]flex'>
                        <div className='text-2xl font-bold tracking-wider'>
                            SOS Game
                        </div>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 m-2 items-center'>
                                    Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 m-2 items-center'>
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </ReactCardFlip>

                {/* Project Grid Item */}
                <div style={{backgroundImage: `url(${Capstone})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            Capstone Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects