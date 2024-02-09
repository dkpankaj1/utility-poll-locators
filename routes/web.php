<?php

use App\Http\Controllers\Web\DashboardController;
use App\Http\Controllers\Web\LoginController;
use App\Http\Controllers\Web\RouteLineController;
use App\Http\Controllers\Web\UserController;
use App\Http\Controllers\Web\UtilityPollController;
use App\Http\Controllers\Web\ZonalController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return to_route('login');
});

Route::middleware('guest')->group(function () {
    Route::get('login',[LoginController::class,'index'])->name('login');
    Route::post('login',[LoginController::class,'store']);
});

Route::middleware('auth')->group(function () {
    Route::get('dashboard',[DashboardController::class,'index'])->name('dashboard');
    Route::resource('route-lines',RouteLineController::class);
    Route::resource('utility-polls',UtilityPollController::class);
    Route::resource('users',UserController::class);

    Route::get('zonals-get-route-lines',[ZonalController::class,'getRouteLine'])->name('zonals-get-route-lines');
    Route::resource('zonals',ZonalController::class);

    Route::post('logout',[LoginController::class,'destroy'])->name('logout');
});
