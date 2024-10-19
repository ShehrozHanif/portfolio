
"use client";

import Image from 'next/image';
import Srz from "../../Picture/Nik.jpg";
import React from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section 
      className="text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-500" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row-reverse px-5 py-24 items-center">
        {/* Image Section with Gradient Overlay */}
        <motion.div 
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-50 rounded"></div>
          <Image
            className="object-cover object-center rounded mx-auto w-[25rem] shadow-lg relative z-10"
            width={500}
            height={500}
            alt="hero"
            src={Srz}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ['Web Developer', 'SEO Consultant', 'UX/UI Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className='w-[100px] h-[2px] bg-yellow-300 mb-4'></div>
          <p className="mb-8 leading-relaxed">
            I'm a passionate UX/UI Designer, SEO Consultant, and Web Developer
            with a keen eye for detail and a commitment to creating exceptional
            digital experiences. I thrive on combining creativity and technical
            expertise to build user-friendly, visually appealing websites that are
            optimized for both search engines and seamless user interactions.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <motion.button 
                className="inline-flex text-white bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Contact US
              </motion.button>  
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
