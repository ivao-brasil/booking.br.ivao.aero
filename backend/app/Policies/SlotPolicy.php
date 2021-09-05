<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\Response;

class SlotPolicy {
    public function create(User $user) {
        if(!$user->isAdmin) {
            return Response::deny("You have no admin permissions");
        }

        return true;
    }

    public function delete(User $user) {
        if(!$user->isAdmin) {
            return Response::deny("You have no admin permissions");
        }

        return true;
    }
}
