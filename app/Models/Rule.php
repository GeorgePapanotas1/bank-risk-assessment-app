<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    use HasFactory;

    public function increase($prev, $num){
        return $prev += $num;
    }

    public function decrease($prev, $num){
        return $prev-=$num;
    }

    public function assign($num){
        return $num;
    }
}
