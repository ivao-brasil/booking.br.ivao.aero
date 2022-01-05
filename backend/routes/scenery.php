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

/*
$router->group(['middleware' => 'auth', 'prefix' => '/event/{eventId}/scenery'], function() use($router) {
    $router->post('/', 'SceneryController@create');
    $router->get('/', 'SceneryController@get');
});

$router->group(['middleware' => 'auth', 'prefix' => 'scenery'], function() use($router) {
    $router->delete('/{sceneryId}', 'SceneryController@delete');
});
*/

$router->group(['prefix' => '/event/{eventId}/scenery'], function() use($router) {
    $router->get('/', 'SceneryController@get');
});

$router->group(['prefix' => 'scenery'], function() use($router) {
    $router->post('/', 'SceneryController@create');
    $router->delete('/{sceneryId}', 'SceneryController@delete');
});
