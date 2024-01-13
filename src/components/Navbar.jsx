import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Resume from '../resume/BrandonPiotrowski-Resume.pdf'
import {Link} from "react-router-dom"

const Navbar = () => {
  const[nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0F0F0F] text-gray-300 z-100'>
      <p className='text-xl'>Brandon Piotrowski</p>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li><Link to="" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger */}
      <button onClick={handleClick} className='md:hidden z-10 hover:cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </button>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0F0F0F] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="" smooth={true} duration={500}>Home</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Social Icons */}
      <div className='hidden xl:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/brandon-piotrowski-01060a199/" target='_blank'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/bpiotrowski154" target='_blank'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <button className='flex justify-between items-center w-full text-gray-300' 
            onClick={() => {navigator.clipboard.writeText('bpiotrowski154@gmail.com'); alert("Email copied to clipboard");}}>
              Email <HiOutlineMail size={30} />
            </button>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' href={Resume} target='_blank'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar