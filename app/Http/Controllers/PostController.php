<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()//endpoint is /posts but in web.php we have excluded this method from the resource route and used in in "/" endpoint
    {
        $posts = Post::latest()->paginate(5);//fetch all the posts from the Post table, paginate them, 5 per page
        return inertia('Home', ['posts' => $posts]);//sending a prop named posts to the Home component
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()//endpoint is /posts/create
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)//endpoint is /posts, this method is called when a post request is made to /posts
    {
        Log::info("Inside store method");//logs in laravel.log file present in storage/logs/laravel.log
        Log::info($request->all()); // Logs all request data
        $fields = $request->validate([//saving the reuest data in fields
            'body' => ['required']//body field is required
        ]);

        Post::create($fields);//inserts a new record into the database posts table, but where is this create method defined? It is defined in the Post model. The Post model extends the Eloquent Model class, which has a create method that creates a new record in the database.
        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)//rendering a page to each specific post/resource, endpoint is /posts/{id}
    {
        return inertia('Show', ['post' => $post]);//sending a prop named post to the Show component
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        //
    }
}
