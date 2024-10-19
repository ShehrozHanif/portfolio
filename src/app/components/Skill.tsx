"use client"


import { AiOutlineCheckCircle } from "react-icons/ai";
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Define the skill types
type SkillType = {
  html: number;
  javascript: number;
  css: number;
  nextjs: number;
  python: number;
  seo: number;
};

const skillValues: SkillType = {
  html: 100,
  javascript: 85,
  css: 88,
  nextjs: 85,
  python: 90,
  seo: 90,
};

function Skill() {
  const [animatedSkillValues, setAnimatedSkillValues] = useState<SkillType>({
    html: 0,
    javascript: 0,
    css: 0,
    nextjs: 0,
    python: 0,
    seo: 0,
  });

  // Scroll trigger using Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate the skill percentages from 0 to their actual values when in view
      const interval = setInterval(() => {
        setAnimatedSkillValues(prev => {
          const newValues = { ...prev };
          let isComplete = true;

          for (const skill in skillValues) {
            if (newValues[skill as keyof SkillType] < skillValues[skill as keyof SkillType]) {
              newValues[skill as keyof SkillType] += 1; // Increment by 1
              isComplete = false;
            }
          }

          if (isComplete) {
            clearInterval(interval);
          }
          return newValues;
        });
      }, 20); // Speed of the animation

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <section className="text-gray-600 body-font bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
        <div className="container px-5 py-24 mx-auto ">
       <div className="mt-10">
         <h1 className="sm:text-4xl text-4xl font-medium title-font mb-4 text-center text-white">
            My Skills
          </h1>
          <div className='w-[100px] h-[2px] bg-yellow-300 mb-4 mx-auto'></div>
       </div>
          <div className="mt-16 mb-10  sm:mt-20">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-5 md:space-y-0 space-y-6">
            {Object.keys(skillValues).map((skill) => (
              <div key={skill} className="p-4 w-[100%] md:w-1/3 flex">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-600 text-white mb-4 flex-shrink-0">
                  <AiOutlineCheckCircle className='text-3xl font-bold' />
                </div>
                <div className="flex-grow pl-6">
                  <h2 className="text-white text-lg title-font font-medium mb-2">
                    {skill.charAt(0).toUpperCase() + skill.slice(1)} {/* Capitalize skill name */}
                  </h2>
                  <div className='relative w-full h-1 bg-gray-300 rounded-xl'>
                    <div
                      className='absolute bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 h-1 rounded-xl'
                      style={{ width: `${animatedSkillValues[skill as keyof SkillType]}%`, transition: 'width 0.5s ease-in-out' }}
                    ></div>
                  </div>
                  <p className='text-right font-bold text-white'>{animatedSkillValues[skill as keyof SkillType]}%</p>
                </div>
              </div>
            ))}
          </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Skill;
