<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('division');
            $table->date('dateStart');
            $table->date('dateEnd');
            $table->string('eventName');
            $table->boolean('privateSlots');
            $table->enum('status', ['created', 'scheduled', 'finished']);
            $table->unsignedBigInteger('createdBy');

            $table
                ->foreign('createdBy')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->string('atcBriefing');
            $table->string('pilotBriefing');
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
        Schema::dropIfExists('events');
    }
}
