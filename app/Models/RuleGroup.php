<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RuleGroup extends Model
{
    use HasFactory;
    protected $table = 'gp_rule_groups';
    protected $primaryKey = 'rg_id';

    protected $fillable = [
        "br_id"
    ];
    /**
     * Set relation level. A rule group may have many conditions
     */
    public function conditions()
    {
        return $this->hasMany(Condition::class, 'rg_id', 'rg_id');
    }

    /**
     * If needed, we can retrieve bank rule data via their relationship
     */
    public function bankrule()
    {
        return $this->belongsTo(BankRule::class, 'br_id');
    }
}
