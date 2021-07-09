<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BankRule extends Model
{
    use HasFactory;
    protected $table = 'gp_bank_rules';
    protected $primaryKey = 'br_id';

    protected $fillable = [
        'action',
        'action_value',
        'isStrong',
    ];

    /**
     * Set relation level. A bank rule may have many rule groups
     */
    public function rulegroups()
    {
        return $this->hasMany(RuleGroup::class, 'br_id', 'br_id');
    }
}
