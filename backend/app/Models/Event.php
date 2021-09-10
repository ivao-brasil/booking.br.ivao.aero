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
        'banner'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
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
