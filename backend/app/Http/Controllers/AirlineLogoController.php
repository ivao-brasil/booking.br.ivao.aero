<?php

namespace App\Http\Controllers;

use Faker\Provider\Image;
use Illuminate\Support\Facades\Storage;

class AirlineLogoController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Gets the airline logo
     */
    public function get($icao, $format)
    {
        $fileName = strtoupper($icao . "_" . $format);
        return Storage::response('/logos/airlines/' . $fileName . '.png');
    }

}
