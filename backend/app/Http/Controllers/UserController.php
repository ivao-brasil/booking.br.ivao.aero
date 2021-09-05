<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function update(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email'
        ]);

        $user = Auth::user();
        $user->email = $request->input('email');
        $user->save();
    }
}
