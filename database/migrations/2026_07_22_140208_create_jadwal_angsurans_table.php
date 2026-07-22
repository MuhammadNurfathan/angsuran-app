<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('jadwal_angsurans', function (Blueprint $table) {
            $table->id();
            $table->string('kontrak_no');
            $table->integer('angsuran_ke');
            $table->bigInteger('angsuran_per_bulan');
            $table->date('tanggal_jatuh_tempo');
            $table->timestamps();

            $table->foreign('kontrak_no')
                  ->references('kontrak_no')
                  ->on('kontraks')
                  ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('jadwal_angsurans');
    }
};