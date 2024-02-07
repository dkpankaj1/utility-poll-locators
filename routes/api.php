<?php

use App\Http\Controllers\Api\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('login', [LoginController::class, "store"]);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
