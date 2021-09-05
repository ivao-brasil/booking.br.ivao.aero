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
        'createdBy'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function creator() {
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }

    public function slots() {
        return $this->hasMany(Slot::class, 'eventId', 'id');
    }
}
