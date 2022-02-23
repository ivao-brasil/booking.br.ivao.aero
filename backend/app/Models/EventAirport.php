<?php

namespace App\Models;

use Database\Factories\EventAirportFactory;
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

    public static function _factory()
    {
        return EventAirportFactory::new();
    }
}
