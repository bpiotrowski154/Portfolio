import React from 'react'

const Contact = () => {
  return (
    <div  name='contact' className='w-full h-screen bg-[#0F0F0F] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ad5c5902-84d3-422c-baf7-b318a8bb5e32" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#5C8374]'>Contact</p>
                <p className='py-4'>// Submit the form below or send me an email - bpiotrowski154@gmail.com</p>
            </div>
            <input className='bg-[#93B1A6] p-2 text-[#0f0f0f] placeholder-[#183D3D]' type="text" placeholderTextColor="#183D3D" placeholder='Name' name="name" />
            <input className='my-4 bg-[#93B1A6] p-2 text-[#0f0f0f] placeholder-[#183D3D]' type="email" placeholder='Email' name="email" />
            <textarea className='bg-[#93B1A6] p-2 text-[#0f0f0f] placeholder-[#183D3D]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 my-8 mx-auto flex items-center'>Contact</button>
        </form>
    </div>
  )
}

export default Contact