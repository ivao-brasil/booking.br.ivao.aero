<?php

namespace App\Http\Controllers;

use App\Models\Event;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    public function create(Request $request)
    {
        $this->authorize('create', Event::class);

        $this->validate($request, [
            'atcBooking' => 'required|url',
            'atcBriefing' => 'required|url',
            'banner' => 'required|url',
            'dateStart' => 'required|numeric',
            'dateEnd' => 'required|numeric',
            'description' => 'required|string',
            'eventName' => 'required|string|max:255',
            'pilotBriefing' => 'required|url',
            'privateSlots' => 'boolean',
            'publicAccess' => 'boolean'
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
            'status' => 'created',
            'createdBy' => $user->id,
            'pilotBriefing' => $request->input('pilotBriefing'),
            'atcBriefing' => $request->input('atcBriefing'),
            'description' => $request->input('description'),
            'atcBooking' => $request->input('atcBooking'),
            'banner' => $request->input('banner')
        ]);

        $event->save();

        return response(null, 201);
    }

    public function get(Request $request)
    {
        if ($request->query('status')) {
            return Event::where('status', $request->query('status'))->get();
        }

        return Event::all();
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();

        $this->validate($request, [
            'dateStart' => 'required|numeric',
            'dateEnd' => 'required|numeric',
            'eventName' => 'required|string|max:255',
            'privateSlots' => 'required|boolean',
            'status' => 'required|string',
            'atcBriefing' => 'required|url',
            'pilotBriefing' => 'required|url',
            'description' => 'required|string',
            'banner' => 'required|url',
            'atcBooking' => 'required|url'
        ]);

        $event = Event::find($id);

        if (!$event) {
            abort(404, 'Event not founded');
        }

        $this->authorize('update', $event);

        $dateStart = new DateTime();
        $dateEnd = new DateTime();

        $dateStart->setTimestamp($request->input('dateStart'));
        $dateEnd->setTimestamp($request->input('dateEnd'));

        $event->fill([
            'division' => $user->division,
            'dateStart' => $dateStart->format("Y-m-d H:i:s"),
            'dateEnd' => $dateEnd->format("Y-m-d H:i:s"),
            'eventName' => $request->input('eventName'),
            'privateSlots' => $request->input('privateSlots'),
            'status' => $request->input('status'),
            'createdBy' => $user->id,
            'pilotBriefing' => $request->input('pilotBriefing'),
            'atcBriefing' => $request->input('atcBriefing'),
            'description' => $request->input('description'),
            'banner' => $request->input('banner'),
            'atcBooking' => $request->input('atcBooking')
        ]);

        $event->save();
    }

    public function delete($id)
    {
        $event = Event::find($id);

        if (!$event) {
            abort(404, 'Event not founded');
        }

        $this->authorize('delete', $event);

        Event::where('id', $id)->delete();
    }
}
