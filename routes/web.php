<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

// Route::get('/', function () {
//     sleep(2);
//     return Inertia::render('Home', ['name' => 'Thanuj', 'timestamp' => now()]);//we have to just give the component name since we have already defined the path in the inertia config file app.jsx
// });//sending a prop named name to the Home component


Route::get('/', [PostController::class, 'index']);//index method in PostController is called when the endpoint is /posts

Route::get('/about', function () {
    return inertia('About/About');
});

// Route::inertia("/",'Home');//this is same as line 5-7
Route::resource('posts', PostController::class) -> except('index');//create a route for all the method in post controller except the index method
//The above line registers following routes in this app: 
// GET	/posts	index	index()
// GET	/posts/create	create	create()
// POST	/posts	store	store()
// GET	/posts/{id}	show	show($id)
// GET	/posts/{id}/edit	edit	edit($id)
// PUT/PATCH	/posts/{id}	update	update($id)
// DELETE	/posts/{id}	destroy	destroy($id)