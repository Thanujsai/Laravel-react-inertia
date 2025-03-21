<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

Route::get('/', function () {
    sleep(2);
    return Inertia::render('Home', ['name' => 'Thanuj']);//we have to just give the component name since we have already defined the path in the inertia config file app.jsx
});//sending a prop named name to the Home component

Route::get('/about', function () {
    return inertia('About/About');
});

// Route::inertia("/",'Home');//this is same as line 5-7
Route::resource('post', PostController::class);