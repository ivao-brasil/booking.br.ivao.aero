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
        'flexibleSlots',
        'status',
        'createdBy'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
