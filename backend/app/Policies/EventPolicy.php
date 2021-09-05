<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class EventPolicy
{
    public function create(User $user)
    {
        return $user->isAdmin
            ? Response::allow()
            : Response::deny("You have no admin permissions");
    }
}
