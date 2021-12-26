<?php

namespace App\Policies;

use App\Models\Event;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class EventPolicy
{
    public function create(User $user)
    {
        return $user->admin
            ? Response::allow()
            : Response::deny("You have no admin permissions");
    }

    public function update(User $user, Event $event)
    {
        if (!$user->admin) {
            return Response::deny('You have no admin permissions');
        }

        if ($event->status === 'finished') {
            return Response::deny('Event is finished and is immutable');
        }

        if ($user->division !== $event->division) {
            return Response::deny('Event is out of your current division');
        }

        return true;
    }

    public function delete(User $user, Event $event)
    {
        if (!$user->admin) {
            return Response::deny('You have no admin permissions');
        }

        if ($event->status === 'scheduled') {
            return Response::deny('Event is active');
        }

        if ($user->division !== $event->division) {
            return Response::deny('Event is out of your current division');
        }

        return true;
    }
}
