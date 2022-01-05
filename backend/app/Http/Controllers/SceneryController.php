<?php

namespace App\Http\Controllers;

use App\Events\Event as EventsEvent;
use App\Models\Event;
use App\Models\Scenery;
use Illuminate\Http\Request;

class SceneryController extends Controller
{
    public function create(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string|max:255',
            'license' => 'required|string',
            'link' => 'required|string',
            'simulator' => 'required|string',
            'icao'      =>  'required|string',
        ]);

        $this->authorize('create', Scenery::class);

        $scenery = new Scenery($request->all());
        $scenery->save();
    }

    public function get(String $eventId)
    {
        $airports = Event::where('id', $eventId)->first()->airports;
        $airports->each (function($item) { $item->sceneries; });

        return $airports;
    }

    public function delete(String $sceneryId)
    {
        Scenery
            ::where('id', $sceneryId)
            ->delete();
    }
}
