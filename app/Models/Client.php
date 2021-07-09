<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'gp_clients';
    protected $primaryKey = 'SSN';
    public $incrementing = false;

    protected $fillable = [
        'SSN',
        'full_name',
        'occupation',
        'total_deposits',
        'total_unpaid_loans',
        'active_loans_number',
        'total_unsettled_amount',
        'risk_score',
    ];

    public function calculateDynamicRisk(){
        $rules = BankRule::all();
        $risk = 0;
        foreach($rules as $rule){
            if($this->calculateDynamicRules($rule->br_id)){
                $risk = $this->performAction($rule->action, $rule->action_value, $risk);
                if($rule->isStrong){
                    return $risk;
                }
            }
        }

        $risk = $risk < 0 ? 0 : $risk;
        $risk = $risk > 100 ? 100 : $risk;

        return $risk;
    }

    private function calculateDynamicRules($rule_id){
        // Get a rule
        $rule = BankRule::find($rule_id);
        // Grab it's rule groups
        $rule2 = $rule->rulegroups;

        $rule_group_results = array();
        // foreach rule group
        foreach($rule2 as $r){

            //grab it's conditions
            $cond = $r->conditions;

            $condition_results = array();

            //For each condition, determine validity
            foreach($cond as $c){
                array_push($condition_results, $this->customComparison($this->getUserField($c->client_field),$c->comparison, $c->comparator));
            }


            //This array push is telling us that there has been at least one false
            //condition. Thus, the rule is false. I placed the ! in front of the check
            //to be consistent with the general logic.

            //Thus, if at least one false exists in the array, we should return false (conditions not met for this rule group)
            array_push($rule_group_results, !in_array(FALSE, $condition_results, TRUE));
        }

        // Final check logic.
        // Rule Groups are designed to be ORed between them.
        // So, I initialize with false. If any conditions are true,
        // the whole Rule will be true and the action will be performed.
        $final_result = false;

        foreach($rule_group_results as $condRes){
            $final_result = $final_result || $condRes;
        }

        return $final_result;

    }


    private function performAction ($action, $value, $oldVal){
        switch ($action){
            case 'assign':
                return $value;
            case 'decrease':
                return $oldVal -= $value;
            case 'increase':
                return $oldVal += $value;
            default:
                return $value;
        }
    }

    private function getUserField($c){
        switch($c){
            case 'total_deposits':
                $val = $this->total_deposits;
                break;
            case 'total_unpaid_loans':
                $val = $this->total_unpaid_loans;
                break;
            case 'active_loans_number':
                $val = $this->active_loans_number;
                break;
            case 'total_unsettled_amount':
                $val = $this->total_unsettled_amount;
                break;
        }

        return $val;
    }

    private function customComparison($val, $comparison, $comparator){
        switch($comparison){
            case '>':
                return $val > $comparator;
                break;
            case '>=';
                return $val >= $comparator;
                break;
            case '<':
                return $val < $comparator;
                break;
            case '<=':
                return $val <= $comparator;
                break;
            case '==':
                return $val <= $comparator;
                break;
        }
    }


    public function calculateRisk() {

        $risk = 0;

        // Rule #1
        if($this->total_unpaid_loans > 3){
            return 80;
        }

        // Rule #2
        //This was if / else but according to
        // dynamic rules architecture, has to be
        // written like this.
        if($this->total_deposits > 50000) {
            $risk -= 20;
        }

        if($this->total_deposits <= 50000) {
            $risk += 30;
        }

        //Rule #3
        if(
            $this->total_unpaid_loans == 0 &&
            $this->active_loans_number == 0 &&
            $this->total_unsettled_amount == 0
         ) {
            $risk -= 20;
        }

        // Rule #4
        if( $this->active_loans_number > 1 ){
            $risk += 30;
        }

        // Rule #5
        if ( $this->total_unpaid_loans > 1 ){
            $risk += 60;
        }

        // Rule #6
        if ( $this->total_unsettled_amount > 0 ){
            $risk += 30;
        }

        $risk = $risk < 0 ? 0 : $risk;
        $risk = $risk > 100 ? 100 : $risk;

        return $risk;
    }
}


