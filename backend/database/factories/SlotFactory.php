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
            'origin' => $this->faker->randomElement(['SBGR', 'SBSP', 'SBPA', 'SBCT', 'SBBE', 'SBBR', null]),
            'destination' => $this->faker->randomElement(['SBGR', 'SBSP', 'SBPA', 'SBCT', 'SBBE', 'SBBR', null]),
            'type' => $this->faker->randomElement(['takeoff', 'landing']),
            'private' => $this->faker->numberBetween(0, 1),
            'slotTime' => $this->faker->time('HI'),
            'gate' => $this->faker->randomNumber(3),
            'aircraft' => $this->faker->randomElement(['B733', 'AT76', 'A319', 'A320', 'A20N', 'A321', 'A21N', 'B738', 'B38M', 'E190', 'E295']),
            'pilotId' => null,
            'eventId' => null,
            'bookingStatus' => 'free'
        ];
    }
}
