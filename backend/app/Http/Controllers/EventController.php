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
            'dateStart' => 'required|numeric',
            'dateEnd' => 'required|numeric',
            'eventName' => 'required|string|max:255',
            'privateSlots' => 'required|boolean',
            'atcBriefing' => 'required|url',
            'pilotBriefing' => 'required|url'
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
            'atcBriefing' => $request->input('atcBriefing')
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
            'status' => 'required|string'
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
            'createdBy' => $user->id
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
