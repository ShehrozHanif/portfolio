
"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../../Picture/logo.png";
import { AiOutlineCloudUpload, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from 'framer-motion'; // Import Framer Motion

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#About' },
    { name: 'Portfolio', href: '#Project' },
    { name: 'Contact', href: '#Contact' }
  ];

  return (
    <motion.div 
      className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 z-50 sticky top-0 shadow-lg' 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <header className="text-white body-font h-32">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* NOSH Logo with Animation */}
          <motion.a 
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            initial={{ y: -50, opacity: 0 }} // Starting position
            animate={{ y: 0, opacity: 1 }}   // Animate to original position
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }} // Bounce effect
            whileHover={{ scale: 1.1 }} // Slight hover scaling effect
          >
            <Image 
              src={logo} 
              alt='NOSH Logo' 
              width={300} 
              height={300} 
              className="w-[100px]" 
            />
            <span className=" -ml-4 text-3xl font-bold cursor-pointer">NOSH</span>
          </motion.a>

          {/* Hamburger Menu for Mobile */}
          {/* <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div> */}

          <div className="md:hidden absolute top-5 left-5 z-10">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
              {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>


          {/* Navigation Links for Desktop */}
          <nav className={`md:ml-auto md:mr-auto flex flex-col md:flex-row items-center space-x-0 md:space-x-8 ${isOpen ? 'block' : 'hidden'} md:flex`}>
            {navLinks.map((link) => (
              <motion.a 
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1 }} // Scale effect on hover
                whileTap={{ scale: 0.95 }}  // Tap effect for touch devices
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-white rounded-full group bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 group-hover:from-yellow-500 group-hover:via-red-500 group-hover:to-purple-600 transition-all duration-500 ease-in-out hover:ring-2 hover:ring-pink-300"
              >
                <span className="relative px-6 py-2 transition-all ease-in-out bg-blue-600 rounded-full group-hover:bg-opacity-0">
                  <span className="relative flex items-center">
                    <span className="mr-2">{link.name}</span>
                  </span>
                </span>
              </motion.a>
            ))}
          </nav>

          {/* Download CV Button */}
          <motion.a 
            href="/cv/cv (1).pdf"  // Link to your CV in the public directory
            download="Shehroz_Hanif_CV.pdf"  // Optionally add a download attribute to specify the file name
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className={`mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:inline-block`}
          >
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 group-hover:from-yellow-500 group-hover:via-red-500 group-hover:to-purple-600 transition-all duration-500 ease-in-out hover:ring-2 hover:ring-pink-300">
              <span className="relative px-6 py-3 transition-all ease-in-out bg-blue-600 rounded-full group-hover:bg-opacity-0">
                <span className="relative flex items-center">
                  <span className="mr-2">Download CV</span>
                  {/* Rotating Icon Animation */}
                  <motion.span 
                    className="ml-2"
                    whileHover={{ rotate: 360 }} // Rotate on hover
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <AiOutlineCloudUpload className='text-xl' />
                  </motion.span>
                </span>
              </span>
            </button>
          </motion.a>
        </div>
      </header>
    </motion.div>
  );
}



