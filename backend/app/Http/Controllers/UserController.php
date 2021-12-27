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

        $perPage = (int)$request->query('perPage', 5,);

        return $users->paginate($perPage > 25 ? 25 : $perPage);
    }

    public function update(Request $request, string $userId)
    {
        $this->authorize('update', [User::class, $userId]);

        $this->validate($request, ['suspended' => "required|boolean"]);

        $user = User::find($userId);

        if (!$user) {
            abort(404, "User not founded");
        }

        $user->suspended = $request->input('suspended');

        $user->save();
    }
}
