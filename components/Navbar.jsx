'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {


    const Links = [
        {id: '1', name: 'About',href: '#about' },
        {id: '2', name: 'Projects/Work',href: '#projects' },
        {id: '3', name: 'Skills',href: '#skills' },
        {id: '4', name: 'Contact',href: '#contact' }
    ]

  return (
    <motion.header
    initial={{opacity:0,y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration: 0.8, ease: 'easeInOut'}}
    className='w-full fixed p-5 justify-center items-center flex bg-none transition ease-in-out z-50'>
        <nav className=' lg:w-[500px] w-[550px] h-[50px] py-3 px-6 flex overflow-hidden    border border-gray-700   rounded-md bg-[#121212]'>
             <ul className='flex w-full justify-around items-center '>
             {Links.map(link => (
                     <li 
                       key={link.id} 
                       className={`
                         cursor-pointer text-gray-300 hover:text-[#f5f5f5] 
                         transition-all duration-300 ease-in-out 
                         after:transition-all after:duration-300 after:ease-in-out 
                         after:w-0 after:h-[2px] hover:after:w-10 after:rounded-full 
                         flex flex-col justify-center items-center after:bg-[#f5f5f5] 
                         px-4 py-2 lg:font-bold
                       `}
                     >
                      <Link href={link.href}> {link.name}</Link>
                     </li>
))}

             </ul>
        </nav>
    </motion.header>
      )
}

export default Navbar
