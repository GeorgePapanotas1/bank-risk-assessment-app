<?php

namespace Database\Seeders;

use App\Models\RuleGroup;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(BankRulesSeeder::class);
        $this->call(RuleGroupsSeeder::class);
        $this->call(ConditionsSeeder::class);
    }
}
