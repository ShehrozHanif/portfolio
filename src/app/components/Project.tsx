
"use client"

import React from 'react';
import Image from 'next/image';
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Login from "../../Picture/Login.png";
import cv from "../../Picture/CV BUILDER.png"
import weather from "../../Picture/weatherapp.png"
import snakeg from "../../Picture/s1.png"
import digi from "../../Picture/digi.png"
import guess from "../../Picture/number.png"
import todo from "../../Picture/to-do.jpg"
import cc from "../../Picture/cc1.jpg"
import pass from "../../Picture/pass.jpg"
function Project() {
  const { ref: projectRef1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: projectRef2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: projectRef3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: projectRef4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: projectRef5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: projectRef6, inView: inView6 } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div id='Project'>
      <motion.section 
      className="text-white bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4">
            My Projects
          </h1>
          <div className='w-[100px] h-[2px] bg-yellow-300 mb-4 mx-auto'></div>
        </div>

        <div className="flex flex-wrap -m-4 -mt-[3rem]">
          {/* Project-1 */}
          <motion.div 
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            ref={projectRef1}
            initial={{ opacity: 0, scale: 0 }} 
            animate={inView1 ? { opacity: 1, scale: 1 } : {}} 
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          >
            <div className="flex relative bg-gradient-to-b from-gray-900/80 via-gray-800/90 to-gray-700/80 hover:bg-opacity-90 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/70 rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={Login}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  Facebook-Login
                </h2>
                <h1 className="title-font text-lg font-medium text-pink-500 mb-3">
                  Login-page
                </h1>
                <p className="leading-relaxed line-clamp-2 text-pink-400">
                  It&apos;s a clone of the Facebook Login page. The beauty of Tailwind CSS
                </p>
                <motion.a 
                  href="https://login-clone-eta.vercel.app/?vercelToolbarCode=J-gb-CcfkAcKT2Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-blue-400 hover:text-blue-600 underline"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project-2 */}
          <motion.div 
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            ref={projectRef2}
            initial={{ opacity: 0, scale: 0 }} 
            animate={inView2 ? { opacity: 1, scale: 1 } : {}} 
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          >
            <div className="flex relative bg-gradient-to-b from-gray-900/80 via-gray-800/90 to-gray-700/80 hover:bg-opacity-90 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/70 rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={cv}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  CV-Builder
                </h2>
                <h1 className="title-font text-lg font-medium text-pink-500 mb-3">
                  CV-Builder
                </h1>
                <p className="leading-relaxed line-clamp-2 text-pink-400">
                  It&apos;s a CV-Builder in which you can make your CV and easily download it.
                </p>
                <motion.a 
                  href="https://cv-builder-two-swart.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-blue-400 hover:text-blue-600 underline"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project-3 */}
          <motion.div 
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            ref={projectRef3}
            initial={{ opacity: 0, scale: 0 }} 
            animate={inView3 ? { opacity: 1, scale: 1 } : {}} 
            transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          >
            <div className="flex relative bg-gradient-to-b from-gray-900/80 via-gray-800/90 to-gray-700/80 hover:bg-opacity-90 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/70 rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={weather}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  Weather App
                </h2>
                <h1 className="title-font text-lg font-medium text-pink-500 mb-3">
                  Weather Widget
                </h1>
                <p className="leading-relaxed line-clamp-2 text-pink-400">
                  It&apos;s a weather app where you can check the weather, built with Next.js.
                </p>
                <motion.a 
                  href="https://app-widget-7pmt.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-blue-400 hover:text-blue-600 underline"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project-4 */}
          <motion.div 
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            ref={projectRef4}
            initial={{ opacity: 0, scale: 0 }} 
            animate={inView4 ? { opacity: 1, scale: 1 } : {}} 
            transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          >
            <div className="flex relative bg-gradient-to-b from-gray-900/80 via-gray-800/90 to-gray-700/80 hover:bg-opacity-90 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/70 rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={snakeg}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  Snake Game
                </h2>
                <h1 className="title-font text-lg font-medium text-pink-500 mb-3">
                  Snake Game
                </h1>
                <p className="leading-relaxed line-clamp-2 text-pink-400">
                It&apos;s a snake game, easy to play, its built using Tailwind CSS and NextJS.
                </p>
                <motion.a 
                  href="https://the-snake-game.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-blue-400 hover:text-blue-600 underline"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project-5 */}
          <motion.div 
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            ref={projectRef5}
            initial={{ opacity: 0, scale: 0 }} 
            animate={inView5 ? { opacity: 1, scale: 1 } : {}} 
            transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          >
            <div className="flex relative bg-gradient-to-b from-gray-900/80 via-gray-800/90 to-gray-700/80 hover:bg-opacity-90 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/70 rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={digi}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  Digital Clock
                </h2>
                <h1 className="title-font text-lg font-medium text-pink-500 mb-3">
                  Digital Clock
                </h1>
                <p className="leading-relaxed line-clamp-2 text-pink-400">
                  It&apos;s a digital Clock , it display 24/7 time, created using Tailwind CSS and NEXTJS.
                </p>
                <motion.a 
                  href="https://digital-clock-five-mocha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-blue-400 hover:text-blue-600 underline"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project-6 */}
          <motion.div 
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            ref={projectRef6}
            initial={{ opacity: 0, scale: 0 }} 
            animate={inView6 ? { opacity: 1, scale: 1 } : {}} 
            transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          >
            <div className="flex relative bg-gradient-to-b from-gray-900/80 via-gray-800/90 to-gray-700/80 hover:bg-opacity-90 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/70 rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={guess}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  Guess the Number
                </h2>
                <h1 className="title-font text-lg font-medium text-pink-500 mb-3">
                  Guess Game
                </h1>
                <p className="leading-relaxed line-clamp-2 text-pink-400">
                It&apos;s a number guessing game created using Tailwind CSS and NextJS.
                </p>
                <motion.a 
                  href="https://guess-game-psi-wheat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-blue-400 hover:text-blue-600 underline"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project-7 */}
          <motion.div 
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            ref={projectRef2}
            initial={{ opacity: 0, scale: 0 }} 
            animate={inView2 ? { opacity: 1, scale: 1 } : {}} 
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          >
            <div className="flex relative bg-gradient-to-b from-gray-900/80 via-gray-800/90 to-gray-700/80 hover:bg-opacity-90 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/70 rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={todo}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  To-do
                </h2>
                <h1 className="title-font text-lg font-medium text-pink-500 mb-3">
                  To-do App
                </h1>
                <p className="leading-relaxed line-clamp-2 text-pink-400">
                  It&apos;s a to-do application in which you can write down your to-do and edit or delete it.
                </p>
                <motion.a 
                  href="https://to-do-gamma-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-blue-400 hover:text-blue-600 underline"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project-8 */}
          <motion.div 
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            ref={projectRef6}
            initial={{ opacity: 0, scale: 0 }} 
            animate={inView6 ? { opacity: 1, scale: 1 } : {}} 
            transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          >
            <div className="flex relative bg-gradient-to-b from-gray-900/80 via-gray-800/90 to-gray-700/80 hover:bg-opacity-90 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/70 rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={pass}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  Generate your password
                </h2>
                <h1 className="title-font text-lg font-medium text-pink-500 mb-3">
                  Password Generator
                </h1>
                <p className="leading-relaxed line-clamp-2 text-pink-400">
                It&apos;s a number password generator created using hooks,components,tailwind CSS in NextJS.
                </p>
                <motion.a 
                  href="https://chai-aur-code-day-02.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-blue-400 hover:text-blue-600 underline"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Project-9 */}
          <motion.div 
            className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            ref={projectRef6}
            initial={{ opacity: 0, scale: 0 }} 
            animate={inView6 ? { opacity: 1, scale: 1 } : {}} 
            transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
          >
            <div className="flex relative bg-gradient-to-b from-gray-900/80 via-gray-800/90 to-gray-700/80 hover:bg-opacity-90 shadow-lg shadow-blue-500/50 hover:shadow-purple-600/70 rounded-lg overflow-hidden">
              <Image
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={cc}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-white opacity-0 hover:opacity-100 rounded-lg">
                <h2 className="tracking-widest text-sm title-font font-medium text-blue-600 mb-1">
                  Convert your Currnecy
                </h2>
                <h1 className="title-font text-lg font-medium text-pink-500 mb-3">
                  Currency Converter
                </h1>
                <p className="leading-relaxed line-clamp-2 text-pink-400">
                It&apos;s a currency converter created using Api,Hooks,Tailwind CSS in NextJS.
                </p>
                <motion.a 
                  href="https://currency-converter-tau-cyan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed text-blue-400 hover:text-blue-600 underline"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </div>
  );
}

export default Project;

