<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ClientMigration extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gp_clients', function (Blueprint $table) {
            $table->string('SSN');
            $table->string('full_name');
            $table->string('occupation');
            $table->bigInteger('total_deposits');
            $table->integer('total_unpaid_loans');
            $table->integer('active_loans_number');
            $table->bigInteger('total_unsettled_amount');
            $table->integer('risk_score')->default(0);
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
        Schema::dropIfExists('gp_clients');
    }
}
