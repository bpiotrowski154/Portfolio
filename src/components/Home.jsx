import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen min-h-screen flex flex-col justify-center items-center'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#5C8374] font-bold'>
                Hi, my name is
            </p>
            <h1 className='text-[#183D3D] text-4xl sm:text-7xl font-bold'>
                Brandon Piotrowski
            </h1>
            <h2 className='text-[#93B1A6] text-4xl sm:text-7xl font-bold'>
                I'm an Aspiring Software Engineer.
            </h2>
            <p className='text-[#93B1A6] py-4 max-w-[700px]'>
                I am a new college graduate with a Bachelor of Science in Computer Science. 
                Currently, I am seeking a job in the tech industry with the goal of working in software or web development.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>
                    <Link to="projects" smooth={true} duration={500}>View Projects</Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home