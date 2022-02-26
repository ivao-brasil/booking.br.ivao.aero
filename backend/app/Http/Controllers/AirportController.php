<?php

namespace App\Http\Controllers;

use App\Services\HQAPIService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class AirportController extends Controller
{
    const AIRPORT_DETAILS_CACHE_KEY_PREFIX = 'airport_details';

    private $hqApi;

    public function __construct(HQAPIService $hqApi)
    {
        $this->hqApi = $hqApi;
    }

    public function getDetails(string $icao) {
        $cacheKey = AirportController::AIRPORT_DETAILS_CACHE_KEY_PREFIX . "_$icao";
        $cacheTtl = Carbon::now()->addMonth();

        return Cache::remember($cacheKey, $cacheTtl, function () use ($icao) {
            return $this->hqApi->getAirportDataByIcao($icao);
        });
    }
}
