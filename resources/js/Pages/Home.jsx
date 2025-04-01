import React from 'react';
import { delay, motion } from 'framer-motion';
import Layout from '../Layouts/Layout';
import { Link, usePage, Head } from '@inertiajs/react';
import {useRoute} from '../../../vendor/tightenco/ziggy';//useRoute hook is present in ziggy package
import { useState, useEffect } from 'react';
function Home({posts}) {//getting this prop posts from index method of postcontroller
    // console.log(props.name)
    console.log(posts);
    console.log("use page");
    console.log(usePage());

    const route = useRoute();
    const { flash } = usePage().props;//usePage().props is used to access the props passed from controller to the page, since flash is in usepage -> props -> flash
    const [flashMsg, setFlashMsg] = useState(flash.message);
    const {component} = usePage();

    useEffect(() => {
      const timer = setTimeout(() => {
          setFlashMsg(null);
      }, 6000); // 6 seconds delay
      return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head title={component}/>{/*this title will be displayed in the browser tab */}
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

      {flashMsg && (
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white"
        >
          {flashMsg}
        </motion.div>
        )}    

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
        {posts.data.map(post => (
          <div key={post.id} className='p-4 border-b'>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 2
              }}
              className='text-sm text-slate-600'
            >
              <span>Posted On : </span>
              <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </motion.div>
            <motion.p 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1
              }}
            className='pt-[5px] font-medium'>{post.id} . {post.body}</motion.p>

            {/* <Link href = {`/posts/${post.id}`} className="text-blue-600 font-bold">Read more...</Link>navigates to Show component with post id as parameter via post controllers show method */}
            <Link href = {route('posts.show', post)}
             className="text-blue-600 font-bold">Read more...</Link>{/*navigates to Show component with post id as parameter via post controllers show method*/}

          </div>
          ))}
      </div>

      <div className='py-12 px-4'>
        {posts.links.map((link) => (
          // console.log("link"),
          // console.log(link),
          link.url ? //{url: null, label: '&laquo; Previous', active: false} => url is null for "Previous" when current page is first page and url is null for "Next" when current page is last page, therefore they will be disabled
          <Link 
            href={link.url} 
            key={link.label} 
            dangerouslySetInnerHTML={{ __html : link.label}} 
            className={`p-1 mx-1 ${ link.active?"text-blue-500 font-bold":""}`}/>
          : 
          <span
            key={link.label} 
            dangerouslySetInnerHTML={{ __html : link.label}} 
            className="p-1 mx-1 text-slate-300">
            
          </span>
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
