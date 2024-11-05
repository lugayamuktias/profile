<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['name' => 'Lugaya Mukti Arwasaputra', 'nickname' => 'Ugai']);
});

Route::get('/profile', function () {
    return Inertia::render('Profile');
});

Route::get('/projects', function () {
    return Inertia::render('Projects');
});

Route::get('/skills', function () {
    return Inertia::render('Skills');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});