<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class SceneryPolicy
{
    public function create(User $user) {
        if(!$user->isAdmin) {
            return Response::deny("You have no admin permissions");
        }

        return true;
    }
}
