import React, {useState} from 'react'
import SOS from '../assets/sosimg.png'
import Capstone from '../assets/capstoneimg.png'
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
                    <div onClick={() => setFlip(!flip)} style={{backgroundImage: `url(${SOS})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div2'></div>
                    <div onClick={() => setFlip(!flip)}>
                        SOS Application
                    </div>
                </ReactCardFlip>


                {/* Projects Grid Item */}
                <div style={{backgroundImage: `url(${SOS})`}} className='group container rounded-md flex justify-center items-center mx-auto content-div'>
            
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold tracking-wider'>
                            SOS Application
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