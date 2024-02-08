<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\ZonalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('login', [LoginController::class, "store"]);


Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('zonals',ZonalController::class)->only(['index','show']);
});
