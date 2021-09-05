<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\IvaoLoginService;
use App\Services\JwtService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function auth(Request $request) {
        $this->validate($request, [
            'ivao-token' => 'required'
        ]);

        try {
            $ivaoUser = IvaoLoginService::getAuthData($request->get('ivao-token'));

            $user = User::updateOrCreate(['vid' => $ivaoUser['vid']], [
                'vid' => $ivaoUser['vid'],
                'firstName' => $ivaoUser['firstname'],
                'lastName' => $ivaoUser['lastname'],
                'atcRating' => $ivaoUser['ratingatc'],
                'pilotRating' => $ivaoUser['ratingpilot'],
                'division' => $ivaoUser['division'],
                'country'=> $ivaoUser['country']
            ]);

            return response()->json([
                'jwt' => JwtService::encode([
                    'vid' => $ivaoUser['vid'],
                    'id' => $user['id']
                ])
            ]);
        } catch (Exception $e) {
            Log::error("Error to authenticate user");
            return response()->json(['error' => 'error to authenticate user'], 403);
        }
    }
}
