<?php

namespace App\Models;

use Database\Factories\ScenaryFactory;
use Illuminate\Database\Eloquent\Model;

class Scenery extends Model
{
    protected $fillable = [
        'title',
        'license',
        'simulator',
        'link',
        'icao'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public static function _factory()
    {
        return ScenaryFactory::new();
    }
}
