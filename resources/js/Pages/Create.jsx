import React from 'react'
import {Button} from 'antd';
import { useForm } from '@inertiajs/react';

function Create() {

    const {data, setData, post ,errors, processing} = useForm({
        body: ""
    }); //extracting these properties from useForm hook, we can also pass initial values to useForm hook, here body is set to empty string
    console.log(useForm())

    function submit(e){
        e.preventDefault();
        post("/posts");//invokes store method in PostsController since /posts > invokes posts.store › PostController@store
    }

    console.log(errors);

    return (
    <>
    <div className="justify-items-center">
      <h1 className="flex text-amber-700 text-3xl">Create a new Post</h1>
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
                disabled={processing}>Create Post </button>
        </form>
    </div>
    </>
  )
}

export default Create
