<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RuleGroupsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('gp_rule_groups')->insert([
            [
                "br_id" => 1,
            ],
            [
                "br_id" => 2,
            ],
            [
                "br_id" => 3,
            ],
            [
                "br_id" => 4,
            ],
            [
                "br_id" => 5,
            ],
            [
                "br_id" => 6,
            ],
            [
                "br_id" => 7,
            ],
        ]);
    }
}
