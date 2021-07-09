<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConditionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('gp_conditions')->insert([
            [
                "client_field" => 'total_unpaid_loans',
                "comparator" => 3,
                "comparison" => '>',
                "rg_id" => 1,
            ],
            [
                "client_field" => 'total_deposits',
                "comparator" => 50000,
                "comparison" => '>',
                "rg_id" => 2,
            ],
            [
                "client_field" => 'total_deposits',
                "comparator" => 50000,
                "comparison" => '<=',
                "rg_id" => 3,
            ],
            [
                "client_field" => 'total_unpaid_loans',
                "comparator" => 0,
                "comparison" => '==',
                "rg_id" => 4,
            ],
            [
                "client_field" => 'active_loans_number',
                "comparator" => 0,
                "comparison" => '==',
                "rg_id" => 4,
            ],
            [
                "client_field" => 'total_unsettled_amount',
                "comparator" => 0,
                "comparison" => '==',
                "rg_id" => 4,
            ],
            [
                "client_field" => 'active_loans_number',
                "comparator" => 1,
                "comparison" => '>',
                "rg_id" => 5,
            ],
            [
                "client_field" => 'total_unpaid_loans',
                "comparator" => 1,
                "comparison" => '>',
                "rg_id" => 6,
            ],
            [
                "client_field" => 'total_unsettled_amount',
                "comparator" => 0,
                "comparison" => '>',
                "rg_id" => 7,
            ],
        ]);
    }
}
