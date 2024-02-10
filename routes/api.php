<?php

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\UtilityPollController;
use App\Http\Controllers\Api\ZonalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('login', [LoginController::class, "store"]);


Route::middleware('auth:sanctum')->group(function () {

    Route::get('utility-polls/{utility_poll}/edit',[UtilityPollController::class,'edit']);
    Route::apiResource('utility-polls',UtilityPollController::class);

    Route::apiResource('zonals',ZonalController::class)->only(['index','show']);
    Route::post('logout',[LoginController::class,'destroy']);
});
