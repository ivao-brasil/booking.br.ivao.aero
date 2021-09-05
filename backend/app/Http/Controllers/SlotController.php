<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Slot;
use Illuminate\Http\Request;

class SlotController extends Controller
{
    public function create(Request $request, $eventId) {
        $this->authorize('create', Slot::class);

        $event = Event::find($eventId);

        if(!$event) {
            abort(404, 'Event not founded');
        }

        if($event->privateSlots) {
            $this->validate($request, [
                'type' => 'required|string',
                'flightNumber' => 'string|max:7',
                'origin' => 'string|max:4',
                'destination' => 'string|max:4',
                'slotTime' => 'required|string|max:4',
                'gate' => 'string|max:10',
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

    public function delete($slotId) {
        $this->authorize('delete', Slot::class);
        Slot::where('id', $slotId)->delete();
    }
}
