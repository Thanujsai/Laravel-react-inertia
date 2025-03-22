import React from 'react';
import { delay, motion } from 'framer-motion';
import Layout from '../Layouts/Layout';
import { Link } from '@inertiajs/react';
function Home({posts}) {
    // console.log(props.name)
    console.log(posts)
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
      className='text-3xl pt-16 flex place-items-center justify-center text-red-400 font-extralight'>Hello Thanuj</motion.h1>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <p className='pt-[5px]'>{post.id} . {post.body}</p>
          </div>
          ))}
      </div>
      <Link preserveScroll href="/" className='block title mt-[1000px]'>{/* By using link tag and preserveScroll attribute we can prevent the page from reloading */}
        {new Date().toLocaleTimeString()}
      </Link>
    </div>
  )
}

Home.layout = page => <Layout children={page} />//home page should have page layout

export default Home
