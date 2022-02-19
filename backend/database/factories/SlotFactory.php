<?php

namespace Database\Factories;

use App\Models\Slot;
use Illuminate\Database\Eloquent\Factories\Factory;

class SlotFactory extends Factory
{
    protected $model = Slot::class;

    public function definition()
    {
        return [
            'flightNumber' => $this->faker->randomElement(['TAM', 'GLO', 'AZU', 'BAW', 'DLH']) . $this->faker->randomNumber(4),
            'origin' => $this->faker->randomElement(['SBGR', 'SBSP', 'SBPA', 'SBCT', 'SBBE', 'SBBR']),
            'destination' => $this->faker->randomElement(['SBGR', 'SBSP', 'SBPA', 'SBCT', 'SBBE', 'SBBR']),
            'type' => $this->faker->randomElement(['takeoff', 'landing']),
            'private' => 0,
            'slotTime' => $this->faker->time('Hi'),
            'gate' => $this->faker->randomNumber(3),
            'aircraft' => $this->faker->randomElement(['B733', 'AT76', 'A319', 'A320', 'A20N', 'A321', 'A21N', 'B738', 'B38M', 'E190', 'E295']),
            'bookingStatus' => 'free'
        ];
    }

    /**
     * Indicate that the slot is private.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function private()
    {
        return $this->state(function (array $attributes) {
            return [
                'origin' => $attributes['type'] == 'takeoff' ? $attributes['origin'] : null,
                'destination' => $attributes['type'] == 'landing' ? $attributes['destination'] : null,
                'flightNumber' => null,
                'aircraft' => null,
                'private' => 1
            ];
        });
    }
}
