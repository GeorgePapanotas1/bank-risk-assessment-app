<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Condition extends Model
{
    use HasFactory;

    protected $table = 'gp_conditions';
    protected $primaryKey = 'cond_id';

    protected $fillable = [
        'client_field',
        'comparator',
        'comparison',
        'rg_id'
    ];

    /**
     * If needed, we can retrieve rule group data via their relationship
     */
    public function rulegroups()
    {
        return $this->belongsTo(RuleGroup::class, 'rg_id', 'rg_id');
    }
}
