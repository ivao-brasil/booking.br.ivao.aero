<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Slot;
use App\Services\PaginationService;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SlotController extends Controller
{

    private $paginationService;

    public function __construct(PaginationService $paginationService)
    {
        $this->paginationService = $paginationService;
    }

    public function create(Request $request, $eventId)
    {
        $this->authorize('create', Slot::class);

        $event = Event::find($eventId);

        if (!$event) {
            abort(404, 'Event not founded');
        }

        $this->validate($request, ['private' => 'required|boolean']);

        if ($request->input('private')) {
            $this->validate($request, [
                'type' => 'required|string',
                'flightNumber' => 'string|max:7',
                'origin' => 'string|max:4',
                'destination' => 'string|max:4',
                'slotTime' => 'required|string|max:4',
                'gate' => 'required|string|max:10',
                'aircraft' => 'string|max:4',
            ]);
        } else {
            $this->validate($request, [
                'type' => 'required|string',
                'flightNumber' => 'required|string|max:7',
                'origin' => 'required|string|max:4',
                'destination' => 'required|string|max:4',
                'slotTime' => 'required|required|string|max:4',
                'gate' => 'required|string|max:10',
                'aircraft' => 'required|string|max:4',
            ]);
        }

        $slot = new Slot();
        $slot->fill($request->all());
        $event->slots()->save($slot);
    }

    public function delete(string $slotId)
    {
        $this->authorize('delete', Slot::class);
        Slot::where('id', $slotId)->delete();
    }

    public function book(Request $request, string $slotId, string $action)
    {
        $slot = Slot::find($slotId);
        $user = Auth::user();

        if (!$slot) {
            abort(404, 'Slot not founded');
        }

        $this->authorize('bookUpdate', $slot);

        if ($action === 'book') {
            if ($slot->private) {
                $this->validate($request, [
                    'flightNumber' => 'required|string|max:7',
                    'origin' => 'required|string|max:4',
                    'destination' => 'required|string|max:4',
                    'aircraft' => 'required|string|max:4',
                ]);

                $slot->fill($request->all());
            }

            $slot->bookingStatus = 'prebooked';
            $slot->bookingTime = (new DateTime())->format("Y-m-d H:i:s");

            $user->slotsBooked()->save($slot);
        } else if ($action === "cancel") {
            if ($slot->private) {
                $slot->flightNumber = null;
                $slot->origin = null;
                $slot->destination = null;
                $slot->aircraft = null;
            }

            $slot->bookingTime = null;
            $slot->pilotId = null;
            $slot->bookingStatus = 'free';
            $slot->save();
        } else if ($action === "confirm") {
            if ($slot->bookingStatus === "prebooked") {
                $slot->bookingStatus = "booked";
                $slot->save();
            }
        }
    }

    public function update(Request $request, $slotId)
    {
        $this->authorize('create', Slot::class);

        $slot = Slot::find($slotId);

        if (!$slot) {
            abort(404, 'Slot not founded');
        }

        $this->validate($request, ['private' => 'required|boolean']);

        if ($request->input('private')) {
            $this->validate($request, [
                'type' => 'required|string',
                'flightNumber' => 'string|max:7',
                'origin' => 'string|max:4',
                'destination' => 'string|max:4',
                'slotTime' => 'required|string|max:4',
                'gate' => 'required|string|max:10',
                'aircraft' => 'string|max:4',
            ]);

            $slot->flightNumber = null;
            $slot->origin = null;
            $slot->destination = null;
            $slot->aircraft = null;

        } else {
            $this->validate($request, [
                'type' => 'required|string',
                'flightNumber' => 'required|string|max:7',
                'origin' => 'required|string|max:4',
                'destination' => 'required|string|max:4',
                'slotTime' => 'required|required|string|max:4',
                'gate' => 'required|string|max:10',
                'aircraft' => 'required|string|max:4',
            ]);
        }

        $slot->fill($request->all());

        $slot->save();
    }

    public function list(string $eventId, Request $request)
    {
        $perPage = (int)$request->query('perPage', 5,);

        return $this->paginationService->transform(
            Slot
                ::with('owner')
                ->where('eventId', $eventId)
                ->paginate($perPage > 25 ? 25 : $perPage)
        /*->map(function ($slot) {
            $slot->private = $slot->private === 1;
            return $slot;
        })*/
        );
    }

    public function getMySlots()
    {
        $user = Auth::user();

        return Slot
            ::with('event')
            ->where('pilotId', $user->id)
            ->get();
    }
}
