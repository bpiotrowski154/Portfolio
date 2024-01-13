import React from 'react'

import HTML from '../assets/html.png'
import GitHub from '../assets/github.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Python from '../assets/python.png'
import CPP from '../assets/cpp.png'
import CSharp from '../assets/csharp.png'
import VSCode from '../assets/vscode.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0F0F0F]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#5C8374]'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            {/* Icon Container */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CPP} alt="HTML icon" />
                    <p className='my-4'>C++</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSharp} alt="HTML icon" />
                    <p className='my-4'>C#</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={VSCode} alt="HTML icon" />
                    <p className='my-4'>Visual Studio Code</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript </p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills