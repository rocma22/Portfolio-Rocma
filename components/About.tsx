"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        <motion.section
            className='mb-28 max-w-[45rem] text-center sm:mb-40 leading-8 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
            ref={ref}
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>
                After completing my studies in <span className="font-medium">English Literature</span>, 
                I discovered my passion for technology and transitioned to 
                <span className="font-medium"> full-stack web development</span>. 
                I enjoy solving complex problems and creating engaging web applications. 
                I am always eager to learn new technologies and improve my craft. 
                Currently, I am seeking a <span className="font-medium">full-time position</span> as a software developer.
            </p>
            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy exploring new tech trends, 
                diving into literature, and spending time with friends and family. 
                I&apos;m also passionate about <span className="font-medium">personal growth</span> and enjoy learning about 
                <span className="font-medium"> history and philosophy</span>.
            </p>
        </motion.section>
    );
}
