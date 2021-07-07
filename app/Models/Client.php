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

    public function calculateRisk() {

        $risk = 0;
        // Rule #1
        if($this->total_unpaid_loans > 3){
            return 80;
        }

        // Rule #2
        if($this->total_deposits > 50000) {
            $risk -= 20;
        }else {
            $risk += 30;
        }
        error_log($risk);

        //Rule #3
        if(
            $this->total_unpaid_loans == 0 &&
            $this->active_loans_number == 0 &&
            $this->total_unsettled_amount == 0
         ) {
            $risk -= 20;
        }
        error_log($risk);

        // Rule #4
        if( $this->active_loans_number > 1 ){
            $risk += 30;
        }
        error_log($risk);

        // Rule #5
        if ( $this->total_unpaid_loans > 1 ){
            $risk += 60;
        }
        error_log($risk);

        // Rule #6
        if ( $this->total_unsettled_amount > 0 ){
            $risk += 30;
        }
        error_log($risk);

        $risk = $risk < 0 ? 0 : $risk;
        $risk = $risk > 100 ? 100 : $risk;

        return $risk;
    }
}


