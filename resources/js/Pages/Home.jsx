import React from 'react';
import { delay, motion } from 'framer-motion';

function Home(props) {
    console.log(props.name)
  return (
    <div>
      <motion.h1 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1 
        }}
      className="text-9xl text-blue-400">Home</motion.h1>
    <motion.h1 
        initial={{opacity:0, scale:0 }}
        animate={{opacity:1, scale:1}}
        transition={{
            type:"spring",
            stiffness:100,
            damping:10,
            delay:2
        }}
      className='text-3xl pt-16 flex place-items-center justify-center'>Hello {props.name}</motion.h1>
    </div>
  )
}

export default Home
