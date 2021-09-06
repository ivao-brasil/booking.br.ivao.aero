<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSceneries extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sceneries', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->unsignedBigInteger('eventId');

            $table
                ->foreign('eventId')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');

            $table->enum('license', ['freeware', 'payware']);

            $table->string('link');

            $table->enum('simulator', ['fs9', 'fsx', 'p3d', 'xp11', 'msfs']);
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
        Schema::dropIfExists('sceneries');
    }
}
