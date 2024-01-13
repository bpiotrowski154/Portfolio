import React from 'react'
import SOSDemo from '../demos/SOSGame.zip'

const Sosdemo = () => {
  return (
    <div name="sosdemo" className='w-full h-screen bg-[#0F0F0F] flex flex-col justify-center items-center p-4'>
        <a href={SOSDemo} className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 my-8 mx-auto flex items-center'></a>
        
    </div>
  )
}

export default Sosdemo