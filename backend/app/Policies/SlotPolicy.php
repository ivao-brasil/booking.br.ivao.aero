<?php

namespace App\Policies;

use App\Models\Slot;
use App\Models\User;
use Carbon\Carbon;
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

        /** @var \App\Models\Event */
        $slotEvent = $slot->event;

        /** @var \Carbon\Carbon */
        $eventEndDate = $slotEvent->dateEnd;
        $now = Carbon::now();

        if ($slot->bookingStatus !== "prebooked") {
            /** @var \Carbon\Carbon */
            $eventStartDate = $slotEvent->dateStart;
            $diffFromStart = $now->diffInDays($eventStartDate, false);

            $maxDaysBeforeEvent = config('app.slot.days_before_event_to_confirm');

            if ($eventStartDate->greaterThan($now) && $diffFromStart > $maxDaysBeforeEvent) {
                return Response::deny("The slot can only be confirmed $maxDaysBeforeEvent days before the event");
            }
        }

        if ($now->greaterThan($eventEndDate)) {
            return Response::deny("The slot can not be updated after the event has ended");
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
