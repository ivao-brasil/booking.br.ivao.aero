<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'division',
        'dateStart',
        'dateEnd',
        'eventName',
        'privateSlots',
        'status',
        'createdBy',
        'pilotBriefing',
        'atcBriefing',
        'description',
        'atcBooking',
        'banner',
    ];

    protected $casts = [
        'dateStart' => 'datetime:Y-m-d\TH:i:sP',
        'dateEnd' => 'datetime:Y-m-d\TH:i:sP'
    ];

    public function creator()
    {
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }

    public function slots()
    {
        return $this->hasMany(Slot::class, 'eventId', 'id');
    }

    public function sceneries()
    {
        return $this->hasMany(Scenery::class, 'eventId', 'id');
    }
}
