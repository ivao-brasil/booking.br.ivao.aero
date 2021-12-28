<?php

namespace Database\Seeders;

use App\Models\Event;
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
            ->count(100)
            ->create();

        Event::_factory()
            ->has(Slot::_factory()->count(500))
            ->count(4)
            ->create();
    }
}
