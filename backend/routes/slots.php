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

use Illuminate\Support\Facades\Auth;

$router->group(['middleware' => 'auth', 'prefix' => '/event/{eventId}/slot'], function() use($router) {
    $router->post('/', 'SlotController@create');
    $router->get('/', 'SlotController@list');
    $router->post('/many', 'SlotController@createMany');
});

$router->group(['middleware' => 'auth', 'prefix' => '/slot'], function () use($router) {
   $router->delete('/{slotId}', 'SlotController@delete');
   $router->put('/{slotId}', 'SlotController@update');
   $router->patch('/{slotId}/{action}', 'SlotController@book');
   $router->get('/me', 'SlotController@getMySlots');
});
