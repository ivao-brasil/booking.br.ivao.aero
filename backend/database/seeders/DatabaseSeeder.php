<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\EventAirport;
use App\Models\Scenery;
use App\Models\Slot;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ##$this->call('UserSeeder');
        User::_factory()
            ->count(10)
            ->create();

        Event::_factory()
            ->has(Slot::_factory()->count(100))
            ->has(Slot::_factory()->count(25)->private())
            ->has(EventAirport::_factory()
                    ->has(Scenery::_factory()->count(5))
                    ->count(1)
            , 'airports')
            ->count(4)
            ->create();
    }
}
