<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'vid' => $this->faker->randomNumber(6),
            'firstName' => $this->faker->firstNameMale(),
            'lastName' => $this->faker->lastName(),
            'atcRating' => $this->faker->numberBetween(1, 10),
            'pilotRating' => $this->faker->numberBetween(1, 10),
            'division' => 'BR',
            'country' => 'BR',
            'suspended' => $this->faker->numberBetween(0, 1),
            'admin' => $this->faker->numberBetween(0, 1)
        ];
    }
}
