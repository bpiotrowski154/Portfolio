import React from 'react'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#0F0F0F]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 '>Projects</p>
                <p>// Check out some of my projects</p>
            </div>

            {/* Project Container */}
            <div>
                <div>
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
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