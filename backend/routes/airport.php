<?php

/** @var \Laravel\Lumen\Routing\Router $router */
$router->group(['middleware' => 'auth', 'prefix' => '/airport'], function() use($router) {
    $router->get('/details/{icao}', 'AirportController@getDetails');
});
