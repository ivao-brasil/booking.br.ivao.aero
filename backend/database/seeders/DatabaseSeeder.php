<?php

namespace Database\Seeders;

use App\Models\Event;
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
        User::newFactory()
            ->count(100)
            ->create();

        Event::newFactory()
            ->count(50)
            ->create();
    }
}
