<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSlots extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('slots', function (Blueprint $table) {
            $table->id();
            $table->string('flightNumber', 7)->nullable();
            $table->string('origin', 4)->nullable();
            $table->string('destination', 4)->nullable();
            $table->enum('type', ['takeoff', 'landing']);
            $table->boolean('private');

            $table->string('slotTime', 4);
            $table->string('gate', 10)->nullable();
            $table->string('aircraft', 4)->nullable();

            $table->unsignedBigInteger('pilotId')->nullable();
            $table->foreign('pilotId')->references('id')->on('users');

            $table->unsignedBigInteger('eventId');
            $table->foreign('eventId')->references('id')->on('events');

            $table->dateTime('bookingTime')->nullable();
            $table->enum('bookingStatus', ['free', 'prebooked', 'booked']);

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
        Schema::dropIfExists('slots');
    }
}
