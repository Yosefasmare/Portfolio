"use client"

import { Github, Instagram, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {

 
  const phoneNumber = '+251963047634';
  const myGitHub = 'https://github.com/Yosefasmare/';
  const instagramUsername = 'josi_12260';


 

  const handleGit = () => {
    window.open(myGitHub, "_blank");
  };
  const handleMakePhoneCall = () => {
    window.open(`tel:${phoneNumber}`);
  };
  const handleOpenInstagramProfileWeb = () => {
    window.open(`https://www.instagram.com/${instagramUsername}`);
  };

  return (
    <div className='w-full p-3 flex justify-between items-center border-t border-gray-300 py-7'>
         <h1 className='font-bold text-white text-xl'>
         copyright © {new Date().getFullYear()} Yosef Asmare.
         </h1>
         <div className='flex gap-3'>
              <button onClick={handleMakePhoneCall} className='border-2 p-2 transition ease-in-out hover:bg-gray-300 border-gray-300 rounded-full flex justify-center items-center '><Phone  className='w-full h-full hover:text-gray-900 text-white'/></button>
              <button onClick={handleGit}  className='border-2 p-2 transition ease-in-out hover:bg-gray-300 border-gray-300 rounded-full flex justify-center items-center '><Github  className='w-full h-full hover:text-gray-900 text-white'/></button>
              <button onClick={handleOpenInstagramProfileWeb} className='border-2 p-2 transition ease-in-out hover:bg-gray-300 border-gray-300 rounded-full flex justify-center items-center '><Instagram  className='w-full h-full hover:text-gray-900 text-white'/></button>
         </div>
    </div>
  )
}

export default Footer
