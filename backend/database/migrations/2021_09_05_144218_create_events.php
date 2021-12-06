<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

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

            $table->timestamp('dateStart')->default(DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('dateEnd')->default(DB::raw('CURRENT_TIMESTAMP'));

            $table->string('eventName');

            $table->boolean('privateSlots')->default(false);

            $table->enum('status', ['created', 'scheduled', 'finished']);

            $table->unsignedBigInteger('createdBy');

            $table
                ->foreign('createdBy')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->text('description');

            $table->text('banner');

            $table->text('atcBooking');

            $table->string('atcBriefing');
            $table->string('pilotBriefing');

            $table->boolean('public')->default(false);

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
