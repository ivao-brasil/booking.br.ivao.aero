<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function list(Request $request)
    {
        $this->authorize('list', User::class);

        $users = User::where('id', '>=', 1);

        if ($request->query('suspended')) {
            $users->where('suspended', filter_var($request->query('suspended'), FILTER_VALIDATE_BOOLEAN));
        }

        if ($request->query('vid')) {
            $users->where('vid', $request->query('vid'));
        }

        return $users->get();
    }

    public function update(Request $request, String $userId)
    {
        $this->authorize('update', User::class);

        $this->validate($request, ['suspended' => "required|boolean"]);

        $user = User::find($userId);

        if (!$user) {
            abort(404, "User not founded");
        }

        $user->suspended = $request->input('suspended');

        $user->save();
    }
}
