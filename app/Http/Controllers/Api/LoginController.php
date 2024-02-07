<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\LoginRequest;
use App\Http\Resources\UserResource;
use App\Traits\HttpResponses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use HttpResponses;
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        if (Auth::user()->currentAccessToken()) {
            Auth::user()->currentAccessToken()->delete();
        }
        
        $data = [
            'user' => new UserResource(Auth::user()),
            'token' => Auth::user()->createToken($request->throttleKey())->plainTextToken,
        ];

        return $this->sendSuccess("login success", $data, 200);

    }
    public function destroy(Request $request)
    {
        Auth::user()->tokens()->delete();
        return $this->sendSuccess("logout success");
    }
}
