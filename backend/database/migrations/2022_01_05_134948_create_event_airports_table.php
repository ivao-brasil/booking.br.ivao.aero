<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventAirportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_airports', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('eventId');

            $table
                ->foreign('eventId')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');


            $table->string('icao');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_airports');
    }
}
