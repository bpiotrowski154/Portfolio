import React from 'react'

const Contact = () => {
  return (
    <div  name='contact' className='w-full h-screen bg-[#0F0F0F] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/ad5c5902-84d3-422c-baf7-b318a8bb5e32" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#5C8374]'>Contact</p>
                <p className='py-4'>// Submit the form below or send me an email - bpiotrowski154@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name="name" />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name="email" />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact