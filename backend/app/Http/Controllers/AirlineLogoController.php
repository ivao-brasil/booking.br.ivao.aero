<?php

namespace App\Http\Controllers;

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
    public function get($icao)
    {
        /*$fileName = strtoupper($icao . "_" . $format);*/
        return Storage::response("/logos/airlines/$icao.gif");
    }

}
