<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class UserPolicy
{
    public function list(User $user)
    {
        if (!$user->isAdmin) {
            return Response::deny("You have no admin permissions");
        }

        return true;
    }

    public function update(User $user, String $userId)
    {
        if($user->id == $userId) {
            return Response::deny("You can't update yourself");
        }

        if (!$user->isAdmin) {
            return Response::deny("You have no admin permissions");
        }

        $targetUser = User::find($userId);

        if($targetUser->isAdmin) {
            return Response::deny("You can't update another admin!");
        }

        return true;
    }
}
