<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Http;

class IvaoLoginService
{
    private const ENDPOINT = 'http://login.ivao.aero/api.php?type=json&token=';

    public static function getAuthData($ivaoToken) {
        $finalEndpoint = self::ENDPOINT . $ivaoToken;
        $data = Http::get($finalEndpoint);
        return $data->json();
    }
}
