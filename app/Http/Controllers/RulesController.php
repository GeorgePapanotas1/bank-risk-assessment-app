<?php

namespace App\Http\Controllers;

use App\Models\BankRule;
use App\Models\RuleGroup;
use Illuminate\Http\Request;

class RulesController extends Controller
{
    //

    public function test(){



        $bankRule = BankRule::with('rulegroups.conditions')->get();

        return json_encode($bankRule);
    }
}
