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

    public function update(User $user)
    {
        if (!$user->isAdmin) {
            return Response::deny("You have no admin permissions");
        }

        return true;
    }
}
