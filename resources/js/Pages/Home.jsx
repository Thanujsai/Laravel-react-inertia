import React from 'react';
import { motion } from 'framer-motion';

function Home() {
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
    </div>
  )
}

export default Home
