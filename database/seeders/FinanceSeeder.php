<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class FinanceSeeder extends Seeder
{
    public function run(): void
    {
        // Insert kontrak
        DB::table('kontraks')->insert([
            'kontrak_no' => 'AGR00001',
            'client_name' => 'SUGUS',
            'otr' => 240000000,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Angsuran per bulan
        $angsuran = 10666667;

        // Generate 18 bulan mulai 25 Januari 2024
        $startDate = Carbon::create(2024, 1, 25);

        for ($i = 1; $i <= 18; $i++) {
            DB::table('jadwal_angsurans')->insert([
                'kontrak_no' => 'AGR00001',
                'angsuran_ke' => $i,
                'angsuran_per_bulan' => $angsuran,
                'tanggal_jatuh_tempo' => $startDate->copy()->addMonths($i - 1),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}