<?php

namespace App\Services;

use App\Models\User;
use Firebase\JWT\JWT;

class JwtService
{
    public static function encode($data) {
        $payload = array(
            "iss" => env('APP_URL'),
            "aud" => env('APP_URL'),
            "iat" => time(),
            "exp" => time() + 24 * 60 * 60,
            "sub" => $data
        );

        return JWT::encode($payload, env('APP_KEY'));
    }

    public static function decode(String $jwt) {
        return Jwt::decode($jwt, env('APP_KEY'), array('HS256'));
    }
}
