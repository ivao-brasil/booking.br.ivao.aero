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
        'vid', 'firstName', 'lastName', 'atcRating', 'pilotRating', 'email'
    ];
}
