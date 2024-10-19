"use client"



import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { useInView } from 'react-intersection-observer'; // Import useInView from react-intersection-observer

function Contact() {
  // Set up inView hook for the main section
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Set up inView hooks for individual elements
  const { ref: mapRef, inView: mapInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: formRef, inView: formInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="Contact">
      <section
        ref={sectionRef}
        className="text-gray-600 body-font relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 py-24"
      >
        
        <div className="container px-5 mx-auto flex flex-col lg:flex-row-reverse"> {/* Adjusted flex direction */}
          
          {/* Add heading for md screens */}

         
        
         {/* ONLY FOR MOBILE */}
        <div className="mt-10 md:hidden">
         <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-center text-white">
            CONTACT ME
          </h1>
          <div className='w-[100px] h-[2px] bg-yellow-300 mb-4 mx-auto'></div>
       </div>
          
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 shadow-lg rounded-lg p-8"
            initial={{ scale: 0 }} 
            animate={{ scale: formInView ? 1 : 0 }} // Trigger animation based on inView
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Contact Form
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Feel free to Contact Us
            </p>
            <motion.div className="relative mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div className="relative mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div className="relative mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </motion.div>
            <motion.button 
              className="text-white bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
            >
              Send Message
            </motion.button>
          </motion.div>

          {/* Google Maps iframe */}
          <motion.div
            ref={mapRef}
            className="lg:w-2/3 md:w-1/2 bg-gray-200 rounded-lg overflow-hidden sm:mr-10 mt-10 p-10 md:mt-0 flex items-end justify-start relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: mapInView ? 1 : 0, y: mapInView ? 0 : 50 }} // Trigger animation based on inView
            transition={{ duration: 0.5 }}
          >
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.6932809514537!2d67.1208602!3d24.9084418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3391fcd77d335%3A0xbb45ad69357de323!2sRufi%20Lake%20Drive%2C%20Jauhar%20Chowrangi%20Rd%2C%20Block%2018%20Gulistan-e-Jauhar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1728945656057!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
            {/* Address and Contact Information */}
            <motion.div
              className="bg-white relative flex flex-wrap py-6 rounded shadow-md z-10 opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: mapInView ? 0 : 20, opacity: mapInView ? 1 : 0 }} // Trigger animation based on inView
              transition={{ duration: 0.5 }}
            >
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Block-18, Near Perfume Chowk, Rufi Lake Drive, Gulistan-e-Jauhar, Karachi
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-blue-500 leading-relaxed cursor-pointer">shehrozhanif18@email.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+923062151026</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
