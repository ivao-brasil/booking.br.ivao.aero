<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\IvaoLoginService;
use App\Services\JwtService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function auth(Request $request) {
        $this->validate($request, [
            'ivao-token' => 'required'
        ]);

        $ivaoUser = IvaoLoginService::getAuthData($request->get('ivao-token'));

        $user = User::updateOrCreate(['vid' => $ivaoUser['vid']], [
            'vid' => $ivaoUser['vid'],
            'firstName' => $ivaoUser['firstname'],
            'lastName' => $ivaoUser['lastname'],
            'atcRating' => $ivaoUser['ratingatc'],
            'pilotRating' => $ivaoUser['ratingpilot']
        ]);

        return response()->json([
            'jwt' => JwtService::encode([
                'vid' => $ivaoUser['vid'],
                'id' => $user['id']
            ])
        ]);
    }
}
