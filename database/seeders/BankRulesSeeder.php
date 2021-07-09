<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use function Ramsey\Uuid\v1;

class BankRulesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('gp_bank_rules')->insert([
            [
                "action" => 'assign',
                "action_value" => 80,
                "isStrong" => 1,
            ],
            [
                "action" => 'decrease',
                "action_value" => 20,
                "isStrong" => 0,
            ],
            [
                "action" => 'increase',
                "action_value" => 30,
                "isStrong" => 0,
            ],
            [
                "action" => 'decrease',
                "action_value" => 20,
                "isStrong" => 0,
            ],
            [
                "action" => 'increase',
                "action_value" => 30,
                "isStrong" => 0,
            ],
            [
                "action" => 'increase',
                "action_value" => 60,
                "isStrong" => 0,
            ],
            [
                "action" => 'increase',
                "action_value" => 30,
                "isStrong" => 0,
            ],
        ]);
    }
}
