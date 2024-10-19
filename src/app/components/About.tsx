
"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import Nik from "../../Picture/Nik.jpg";
import { motion, useAnimation } from 'framer-motion'; // Import useAnimation
import { useInView } from 'react-intersection-observer'; // Import useInView hook from react-intersection-observer

function About() {
  const controls = useAnimation(); // Hook to manually control animations
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
    triggerOnce: true, // Ensures animation triggers only once
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 }); // Start animation when in view
    }
  }, [controls, inView]);

  return (
    <div id="About" ref={ref}>
      <section className="text-gray-600 body-font bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Add heading for small screens */}
          <h1 className="title-font sm:text-4xl text-4xl mb-14 -mt-20  font-medium text-white text-center md:hidden">
            About Me
          </h1>

          <motion.div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            animate={controls} // Control the animation with the 'controls' hook
            transition={{ duration: 0.8 }}
          >
            <Image
              className="object-cover object-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
              alt="Nik"
              src={Nik}
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
            initial={{ opacity: 0, x: 100 }}
            animate={controls} // Control the animation with the 'controls' hook
            transition={{ duration: 0.5 }}
          >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hidden md:block">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              I am a versatile professional with a strong foundation in UX/UI design, SEO consulting, and web development. With expertise in modern web technologies such as Python, TypeScript, JavaScript, and Next.js, I build dynamic and user-centric websites and applications. My passion for creating seamless user experiences, combined with my technical skills, allows me to design, develop, and optimize projects that not only look great but perform exceptionally well. Whether it's improving website visibility through SEO or building intuitive interfaces, I aim to deliver impactful results.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="inline-flex text-white bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg transition duration-300">
                  View CV
                </button>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
