<?php

namespace Database\Factories;

use App\Models\Scenery;
use Illuminate\Database\Eloquent\Factories\Factory;

class ScenaryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Scenery::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(4),
            'license' => $this->faker->randomElement(['freeware', 'payware']),
            'simulator' => $this->faker->randomElement(['fs9', 'fsx', 'p3d', 'xp11', 'msfs']),
            'link' => $this->faker->url(),
            'icao' => strtoupper($this->faker->lexify('????'))
        ];
    }
}
