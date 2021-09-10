<?php

namespace App\Console;

use App\Models\Event;
use App\Models\Slot;
use Carbon\Carbon;
use Illuminate\Console\Scheduling\Schedule;
use Laravel\Lumen\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{

    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            $DAY = 24 * 60 * 60;

            $now = Carbon::now();
            $events = Event
                ::where('dateStart', '<=', $now->addDays(2))
                ->get();

            foreach ($events as $event) {
                $eventId = $event->id;

                Slot::where('eventId', $eventId)
                    ->where('bookingStatus', 'prebooked')
                    ->where('private', false)
                    ->update([
                        'bookingStatus' => 'free',
                        'pilotId' => null,
                        "bookingTime" => null
                    ]);

                Slot::where('eventId', $eventId)
                    ->where('bookingStatus', 'prebooked')
                    ->where('private', true)
                    ->update([
                        'flightNumber' => null,
                        'bookingStatus' => 'free',
                        'pilotId' => null,
                        'origin' => null,
                        'destination' => null,
                        'aircraft' => null,
                        "bookingTime" => null
                    ]);

            }
        })->everyMinute();
    }
}
