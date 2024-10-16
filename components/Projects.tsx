"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import Project from './project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'



export default function Projects() {
   const {ref} = useSectionInView('Projects',0.5)
    return (
        <section className='scroll-mt-28 mb-28' id='projects' ref={ref}>
            <SectionHeading>My Projects</SectionHeading>

            {
                projectsData.map((project, index) => (
                    <Project key={index} {...project} />
                ))
            }
        </section>
    )
}
