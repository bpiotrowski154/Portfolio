import React from 'react'

const Capstonedemo = () => {
  return (
    <div name="capstonedemo" className='w-full min-h-screen flex flex-col justify-center items-center p-4'>
        <div className='h-[80px]'></div>
        <p className='text-4xl font-bold inline border-b-4 border-[#5C8374] mb-6'>Capstone Project</p>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl font-bold'>Feel free to download the project and try it out yourself!</p>
            <p className='text-[#5C8374]'>//After downloading, unzip the folder and open the application file titled 'SOS'</p>
        </div>
        {/* <a href={} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>Windows Download</a> */}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-40'>
            <p className='pb-5'>
                For my junior year Foundations of Software Engineering class, this final project presented an opportunity to learn 
                about GUI development, and required me to independendently design and implement a software application using the SCRUM process.
            </p>
            <p className='border-b-4 border-[#5C8374] w-fit'>Significant Takeaways:</p>
            <ul className='pb-10'>
                <li>- </li>
                <li>- </li>
                <li>- </li>
                <li>- </li>
            </ul>

            <p className='pb-4'>An image</p>
            {/* <img src={} className='pb-10'/> */}
            <p className='pb-4'>An image</p>
            {/* <img src={} className='pb-10'/> */}
            <p className='pb-4'>An image</p>
            {/* <img src={} className='pb-10' /> */}
        </div>
        
        <a href="https://github.com/bpiotrowski154/SOS-Board-Game" target='_blank' className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>GitHub</a>
        
    </div>
  )
}

export default Capstonedemo