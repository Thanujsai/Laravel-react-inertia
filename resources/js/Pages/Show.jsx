import React from 'react';
import {Button} from 'antd';
import { Inertia } from '@inertiajs/inertia';
import { motion } from 'framer-motion';
import { useForm } from '@inertiajs/react';

function Show(props) {
    console.log(props);
    console.log("use form hook");
    console.log(useForm());

    const {delete: destroy} = useForm();//extracting delete method from useForm hook

    function submit(e) {
        e.preventDefault();
        destroy(`/posts/${props.post.id}`);//invokes destroy method in PostsController since destroy /posts/{id} > invokes posts.destroy › PostController@destroy
        //  DELETE          posts/{post} .................. posts.destroy › PostController@destroy
    }//destroy makes a http delete request to the server
    const goBack =() => {
        Inertia.visit("/");
    }
    const post = props.post;
  return (
    <div className="flex flex-col items-center gap-10">
        <div key={post.id} className='p-4'>
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

            <p className='flex items-center justify-end gap-2'>
                <form onSubmit={submit}>
                    <button className='bg-red-500 rounded-md text-sm px-4 py-1 text-white'>Delete</button>
                </form>
            </p>
        </div>
      <Button onClick={goBack}>Back</Button>
    </div>
  )
}

export default Show
