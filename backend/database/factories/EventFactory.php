<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'division' => 'BR',
            'dateStart' => $this->faker->dateTime(),
            'dateEnd' => $this->faker->dateTime(),
            'eventName' => $this->faker->jobTitle(),
            'privateSlots' => $this->faker->numberBetween(0, 1),
            'status' => $this->faker->randomElement(['created', 'scheduled', 'finished']),
            'createdBy' => 1,
            'description' => $this->faker->text(300),
            'banner' => 'https://wallpapercave.com/wp/wp4728116.jpg',
            'atcBooking' => $this->faker->url(),
            'atcBriefing' => $this->faker->url(),
            'pilotBriefing' => $this->faker->url(),
            'public' => $this->faker->numberBetween(0, 1)
        ];
    }
}
