<?php

namespace Database\Factories;

use App\Models\EventAirport;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventAirportFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = EventAirport::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'icao' => strtoupper($this->faker->lexify('????'))
        ];
    }
}
