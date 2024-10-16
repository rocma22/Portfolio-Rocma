import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500' >
        <small className='mb-2 block text-xs' >&copy;{new Date().getFullYear()} - {new Date().getFullYear() + 1} Amine. All rights reserved</small>
        <p className='text-xs ' >
            <span>About this website:</span> built with react & next.js(App Router & server Actions),TypeScript and Tailwind CSS,Framer Motion, React Email & Resend , vercel hosting
        </p>
    </footer>
  )
}
