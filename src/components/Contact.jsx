import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Resume from '../resume/BrandonPiotrowski-Resume.pdf'

const Contact = () => {
  return (
    <div  name='contact' className='w-full min-h-screen flex flex-col justify-center items-center p-4'>
      <div className='h-[80px]'></div>
        <form method='POST' action="https://getform.io/f/ad5c5902-84d3-422c-baf7-b318a8bb5e32" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#5C8374]'>Contact</p>
                <p className='py-4'>// Submit the form below or send me an email directly</p>
            </div>
            <input className='bg-[#93B1A6] p-2 text-[#0f0f0f] placeholder-[#183D3D]' type="text" placeholderTextColor="#183D3D" placeholder='Name' name="name" />
            <input className='my-4 bg-[#93B1A6] p-2 text-[#0f0f0f] placeholder-[#183D3D]' type="email" placeholder='Email' name="email" />
            <textarea className='bg-[#93B1A6] p-2 text-[#0f0f0f] placeholder-[#183D3D]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#5C8374] hover:border-[#5C8374] px-4 py-3 my-8 mx-auto flex items-center'>Contact</button>
        </form>
        <div className='flex justify-between'>
          <a className='mx-6' title='LinkedIn Account' href="https://www.linkedin.com/in/brandon-piotrowski-01060a199/" target='_blank'><FaLinkedin size={30}/></a>
          <a className='mx-6' title='GitHub Account' href="https://github.com/bpiotrowski154" target='_blank'><FaGithub size={30}/></a>
          <button className='mx-6' title='Copy Email' onClick={() => {navigator.clipboard.writeText('bpiotrowski154@gmail.com'); alert("Email copied to clipboard");}}><HiOutlineMail size={30}/></button>
          <a className='mx-6' title='View Resume' href={Resume} target='_blank'><BsFillPersonLinesFill size={30}/></a>
        </div>
        
    </div>
  )
}

export default Contact