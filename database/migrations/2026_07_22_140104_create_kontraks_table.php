<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('kontraks', function (Blueprint $table) {
            $table->string('kontrak_no')->primary();
            $table->string('client_name');
            $table->bigInteger('otr');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('kontraks');
    }
};