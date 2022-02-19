<?php

namespace App\Models;

use Database\Factories\SlotFactory;
use Illuminate\Database\Eloquent\Model;

class Slot extends Model
{
    protected $fillable = [
        'flightNumber',
        'origin',
        'destination',
        'type',
        'slotTime',
        'gate',
        'aircraft',
        'route',
        'bookingTime',
        'bookingStatus',
        'private'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public static $allowedQueryParams = [
        'flightNumber',
        'aircraft',
        'type',
        'private'
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'pilotId', 'id');
    }

    public function event()
    {
        return $this->belongsTo(Event::class, 'eventId', 'id');
    }

    public static function _factory()
    {
        return SlotFactory::new();
    }
}
