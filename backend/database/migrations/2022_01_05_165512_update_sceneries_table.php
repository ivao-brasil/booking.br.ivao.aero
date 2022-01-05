<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateSceneriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sceneries', function (Blueprint $table) {
            $table->dropForeign('sceneries_eventid_foreign');
            $table->dropColumn('eventId');
            $table->string('icao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sceneries', function (Blueprint $table) {
            $table->dropColumn('icao');
            $table->unsignedBigInteger('eventId');

            $table
                ->foreign('eventId')
                ->references('id')
                ->on('events')
                ->onDelete('cascade');
        });
    }
}
