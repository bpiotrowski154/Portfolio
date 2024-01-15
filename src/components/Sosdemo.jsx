import React from 'react'
import SOSDemo from '../demos/SOSGame.zip'
import SosImg1 from '../assets/sosgameimg1.png'
import SosImg2 from '../assets/sosgameimg2.png'
import SosImg3 from '../assets/sosgameimg3.png'

const Sosdemo = () => {
  return (
    <div name="sosdemo" className='w-full min-h-screen flex flex-col justify-center items-center p-4'>
        <div className='h-[80px]'></div>
        <p className='text-4xl font-bold inline border-b-4 border-[#5C8374] mb-6'>SOS Game Project</p>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl font-bold'>Feel free to download the project and try it out yourself!</p>
            <p className='text-[#5C8374]'>//After downloading, unzip the folder and open the application file titled 'SOS'</p>
        </div>
        <a href={SOSDemo} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>Windows Download</a>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-40'>
            <p className='pb-5'>
                For my junior year Foundations of Software Engineering class, this final project presented an opportunity to learn 
                about GUI development, and required me to independendently design and implement a software application using the SCRUM process.
            </p>
            <p className='border-b-4 border-[#5C8374] w-fit'>Significant Takeaways:</p>
            <ul className='pb-10'>
                <li>- Learned about front-end and back-end development</li>
                <li>- GUI design basics and principals</li>
                <li>- Computer-player algorithm design</li>
                <li>- Gained experience with C# and XAML</li>
            </ul>

            <p className='pb-4'>An image taken from game between a human and computer player. The gamemode is set to simple (the first one to form an 'SOS' wins).</p>
            <img src={SosImg1} className='pb-10'/>
            <p className='pb-4'>An image where the human player beats the computer player during a simple game.</p>
            <img src={SosImg2} className='pb-10'/>
            <p className='pb-4'>An image where the gamemode is set to general (the player with the most 'SOS' formed wins), and the board size is increased.</p>
            <img src={SosImg3} className='pb-10' />
        </div>
        
        <a href="https://github.com/bpiotrowski154/SOS-Board-Game" target='_blank' className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>GitHub</a>
        
    </div>
  )
}

export default Sosdemo