import React from 'react'
import {Button} from 'antd';
import { useForm, Head } from '@inertiajs/react';
import {useRoute} from '../../../vendor/tightenco/ziggy';//useRoute hook is present in ziggy package


function Edit({post})//post is passed as a prop from Show.jsx page, we can also use usePage hook to get the post data
{

    const {data, setData, put ,errors, processing} = useForm({//put to update the post
        body: post.body,//to populate the textarea with the existing post body
    }); //extracting these properties from useForm hook, we can also pass initial values to useForm hook, here body is set to empty string
    console.log(useForm())

    const route = useRoute();
    

    function submit(e){
        e.preventDefault();
        //put(`/posts/${post.id}`);//invokes store method in PostsController since /posts > invokes posts.store › PostController@store
        put(route('posts.update', post.id), data);//invokes update method in PostsController since /posts/{id} > invokes posts.update › PostController@update
    }

    console.log(errors);

    return (
    <>
    <Head title="Edit" />
    <div className="justify-items-center">
      <h1 className="flex text-amber-700 text-3xl">Update your Post</h1>
    </div>
    <div className="w-1/2 mx-auto pt-14">
        <form className="flex flex-col items-center" onSubmit={submit}>
            <textarea 
                rows="10" 
                value = {data.body} 
                onChange = {(e) => setData('body', e.target.value)}//key is "body" and value is e.target.value
                className={errors.body ? "border !border-red-600 p-2 w-full bg-white text-black" : "border border-gray-400 p-2 w-full bg-white text-black"}//if there is an error in body field, border color will be red
            >
            </textarea>

            {errors.body && 
            <p className="text-red-600">{errors.body}</p>
            }
            <button 
                className="border mt-4" 
                disabled={processing}>Update Post </button>
        </form>
    </div>
    </>
  )
}

export default Edit
