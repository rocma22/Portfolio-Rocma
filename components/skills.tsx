"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'


const fadeInAnimation = {
  initial: {
    opacity: 0,
    y:20
  },
  animate:(index:number)=>({
    opacity: 1,
    y: 0,
    transition: {delay:0.05*index}
  })
}

export default function skills() {
  const {ref} = useSectionInView('Skills',0.5)
  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mg-40'>
        <SectionHeading>Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800' >
          {
            skillsData.map((skill, index) => (
              <motion.li variants={fadeInAnimation} initial="initial" whileInView="animate" viewport={{once:true}} custom={index} key={index} className='capitalize bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80' >{skill}</motion.li>
            ))
          }
        </ul>
    </section>
  )
}
