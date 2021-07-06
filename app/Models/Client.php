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
}


