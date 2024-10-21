"use client";

import Image from 'next/image';
import React from 'react';
import profile from '@/public/profile.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActive, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id='home' ref={ref}>
            <div className='flex justify-center items-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", duration: 0.2 }}
                    >
                        <Image src={profile} width={300} height={300} quality={100} alt="profile" className='h-24 w-24 rounded-full border-[0.32rem] border-white object-cover' />
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-3xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                    >
                        👋🏼
                    </motion.span>
                </div>
            </div>

            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I&apos;m Amine.</span> I&apos;m a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">4 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">Master SQL & NOSQL Projects</span>.
            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    scroll={false} // Prevent Next.js from controlling scroll
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition hover:bg-gray-950 active:scale-105'
                    onClick={() => {
                        setActive("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here <BsArrowRight className='opacity-80 group-hover:translate-x-1 transition' />
                </Link>

                <a href='/CV.pdf' className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition active:scale-105 cursor-pointer border border-black/10 dark:bg-white/10 dark:hover:bg-white/20' download>
                    Download CV {/* Fixed typo from 'Donwload' to 'Download' */}
                    <HiDownload className='opacity-60 group-hover:translate-y-1 ' />
                </a>

                <a href="https://www.linkedin.com/in/amine-hasnat/" target='_blank' rel="noreferrer" className='bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] transition active:scale-105 cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'>
                    <BsLinkedin />
                </a>

                <a href="https://github.com/" className='bg-white text-[1.35rem] p-4 flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] transition active:scale-105 cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'>
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
