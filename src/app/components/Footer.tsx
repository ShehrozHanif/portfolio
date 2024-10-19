

"use client";


import Link from 'next/link';
import React from 'react';
import logo from "../../Picture/logo.png"
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import Framer Motion for animations

function Footer() {
  return (
    <div className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white border-t-2 border-yellow-500'>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* NOSH Logo with bottom-border hover effect */}
          <Link href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-white group relative">
          <Image 
          src={logo} 
          alt='NOSH Logo' 
          width={300} 
          height={300}
          className='w-[70px]'/>
            <span className=" -ml-3 text-xl relative">
              NOSH
              {/* Bottom-border hover effect */}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </Link>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
            © 2024 NOSH 
          </p>

          {/* Social Media Links with bottom-border hover effect */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-3">
            {/* Facebook */}
            <motion.a
              target="_blank"
              href={"https://www.facebook.com/muhammad.shehroz.357284"}
              className="group relative"
              whileHover={{ scale: 1.1 }} // Scale effect on hover
              whileTap={{ scale: 0.95 }}   // Tap effect on mobile
            >
              <FaFacebook className='text-xl text-white hover:text-blue-400 transition duration-300' />
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              target="_blank"
              href={"https://www.instagram.com/the.realshehroz/"}
              className="group relative ml-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram className='text-xl text-orange-600 hover:text-orange-400 transition duration-300' />
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </motion.a>

            {/* Twitter */}
            <motion.a
              target="_blank"
              href={""}
              className="group relative ml-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <RiTwitterXFill className='text-lg text-white' />
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              target="_blank"
              href={"https://www.linkedin.com/in/shehroz-hanif-60441727a/"}
              className="group relative ml-3"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className='text-xl text-white hover:text-blue-300 transition duration-300' />
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </motion.a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

