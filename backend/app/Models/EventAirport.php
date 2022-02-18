<?php

namespace App\Models;

use App\Models\Event as ModelsEvent;
use Database\Factories\EventFactory;
use Illuminate\Database\Eloquent\Model;

class EventAirport extends Model
{
    protected $fillable = [
        'eventId',
        'icao',
    ];

    //TODO: FIX THIS F-ING MESS
    protected $table = 'event_airports';

    public function airports()
    {
        return $this->hasOne(Event::class, 'id', 'eventId');
    }

    public function sceneries()
    {
        return $this->hasMany(Scenery::class, 'icao', 'icao');
    }
}
