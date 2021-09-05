<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'vid', 'firstName', 'lastName', 'atcRating', 'pilotRating', 'email', 'division', 'country'
    ];

    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function eventsCreated() {
        return $this->hasMany(Event::class);
    }

    public function slotsBooked() {
        return $this->hasMany(Slot::class);
    }
}
