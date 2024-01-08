import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0F0F0F]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#5C8374] font-bold'>
                Hi, my name is
            </p>
            <h1 className='text-[#183D3D] text-4xl sm:text-7xl font-bold'>
                Brandon Piotrowski
            </h1>
            <h2 className='text-[#93B1A6] text-4xl sm:text-7xl font-bold'>
                I'm a Software Engineer.
            </h2>
            <p className='text-[#93B1A6] py-4 max-w-[700px]'>
                ***Insert about stuff**
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>
                    View Work 
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