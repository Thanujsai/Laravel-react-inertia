import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <motion.h1 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1 
        }}
        className='text-3xl text-amber-700'>About Page</motion.h1>
    </div>
  )
}

export default About
