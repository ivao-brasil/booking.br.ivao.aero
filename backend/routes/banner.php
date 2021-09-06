<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use Symfony\Component\HttpFoundation\BinaryFileResponse;

$router->group(['prefix' => 'banner'], function() use($router) {
    $router->get('/{banner}', function($banner) {
        $path = Storage::path("banners/$banner");
        $type = 'image/jpg';
        $headers = ['Content-Type' => $type];        
        $response = new BinaryFileResponse($path, 200 , $headers);
        return $response;
    });
});
