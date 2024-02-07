<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Users/Index', ['users' => User::all()]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(UserCreateRequest $request)
    {
        $user = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ];
        try {
            User::create($user);
            return redirect()->route('users.index')->with('success','User created successfully');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }
    }

    public function show()
    {

    }

    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', ['user' => $user]);
    }

    public function update(UserUpdateRequest $request,User $user)
    {
        try {
            $user->update([
                'name' => $request->name,
                'email' => $request->email
            ]);
            return redirect()->route('users.index')->with('success','User updated successfully');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', $th->getMessage());
        }

    }
    public function destroy()
    {

    }
}
