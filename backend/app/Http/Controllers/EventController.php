<?php

namespace App\Http\Controllers;

use App\Models\Event;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function create(Request $request) {
        $this->authorize('create', Event::class);

        $this->validate($request, [
            'dateStart' => 'required',
            'dateEnd' => 'required',
            'eventName' => 'required|string|max:255',
            'privateSlots' => 'required|boolean',
            'flexibleSlots' => 'required|boolean',
        ]);

        $user = Auth::user();

        $dateStart = new DateTime();
        $dateEnd = new DateTime();

        $dateStart->setTimestamp($request->input('dateStart'));
        $dateEnd->setTimestamp($request->input('dateEnd'));

        $event = new Event();

        $event->fill([
            'division' => $user->division,
            'dateStart' => $dateStart->format("Y-m-d H:i:s"),
            'dateEnd' => $dateEnd->format("Y-m-d H:i:s"),
            'eventName' => $request->input('eventName'),
            'privateSlots' => $request->input('privateSlots'),
            'flexibleSlots' => $request->input('flexibleSlots'),
            'status' => 'created',
            'createdBy' => $user->id
        ]);

        $event->save();

        return response(null, 201);
    }
}
