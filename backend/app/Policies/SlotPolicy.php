<?php

namespace App\Policies;

use App\Models\Slot;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SlotPolicy
{
    public function create(User $user)
    {
        if (!$user->admin) {
            return Response::deny("You have no admin permissions");
        }

        return true;
    }

    public function delete(User $user)
    {
        if (!$user->admin) {
            return Response::deny("You have no admin permissions");
        }

        return true;
    }

    public function bookUpdate(User $user, Slot $slot)
    {
        if ($user->suspended) {
            return Response::deny('You are suspended to book flights');
        }

        if ($slot->pilotId !== $user->id && !is_null($slot->pilotId)) {
            return Response::deny("You're not owner of this slot");
        }

        return true;
    }

    public function update(User $user)
    {
        if (!$user->admin) {
            return Response::deny("You have no admin permissions");
        }

        return true;
    }
}
