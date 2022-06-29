<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductionMachineryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('production_machineries', function (Blueprint $table) {
            $table->id();
            $table->string('machine_id');
            $table->string('department')->nullable();
            $table->string('name');
            $table->string('operator_id')->nullable();
            $table->decimal('cost', 20, 2)->nullable();
            $table->date('start_date')->nullable();
            $table->date('stop_date')->nullable();
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
        Schema::dropIfExists('production_machineries');
    }
}
