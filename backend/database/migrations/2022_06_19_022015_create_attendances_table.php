<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAttendancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->integer("employee_id");
            $table->date("att_date");
            $table->boolean("attendance");
            $table
            ->bigInteger("user_id")
            ->unsigned()
            ->nullable();
        // FKs
        $table
            ->foreign("user_id")
            ->references("id")
            ->on("users")
            ->onDelete("cascade");
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
        Schema::dropIfExists('attendances');
    }
}
