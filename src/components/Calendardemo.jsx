import React from 'react'

const Calendardemo = () => {
  return (
    <div name="calendardemo" className='w-full min-h-screen flex flex-col justify-center items-center p-4'>
        <div className='h-[80px]'></div>
        <p className='text-4xl font-bold inline border-b-4 border-[#5C8374] mb-6'>To-Do List Calendar Project</p>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl font-bold mb-6'>Feel free to try the project out yourself!</p>
        </div>
        <a href='https://human-computer-interface-final.vercel.app/' target='_blank' className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>Demo</a>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-40'>
            <p className='pb-5'>
                For my junior year Foundations of Software Engineering class, this final project presented an opportunity to learn 
                about GUI development, and required me to independendently design and implement a software application using the SCRUM process.
            </p>
            <p className='border-b-4 border-[#5C8374] w-fit'>Significant Takeaways:</p>
            <ul className='takeaways'>
                <li>Learned about the importance of accessibility for people with disabilities</li>
                <li>Created my first web application</li>
                <li>Learned about the design patterns (color, patterns, fonts) to use and avoid for different types of color blindness</li>
                <li>Gained experience using HTML, CSS, and Javascript</li>
            </ul>

            <p></p>
            <img src=''/>
            <p></p>
            <img src=''/>
            <p></p>
            <img src=''/>
        </div>
        
        <a href="https://github.com/bpiotrowski154/HumanComputerInterfaceFinal" target='_blank' className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>GitHub</a>
        
    </div>
  )
}

export default Calendardemo