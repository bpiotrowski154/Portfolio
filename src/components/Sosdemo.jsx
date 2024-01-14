import React from 'react'
import SOSDemo from '../demos/SOSGame.zip'

const Sosdemo = () => {
  return (
    <div name="sosdemo" className='w-full min-h-screen flex flex-col justify-center items-center p-4'>
        <p className='text-2xl font-bold mx-auto p-2'>Feel free to download the project and try it out yourself!</p>
        <p className='mx-auto p-2'>//After downloading, unzip the folder and open the application file titled 'SOS'</p>
        <a href={SOSDemo} className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5C8374] hover:border-[#5C8374]'>Windows Download</a>
        
    </div>
  )
}

export default Sosdemo