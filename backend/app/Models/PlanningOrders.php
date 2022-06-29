<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanningOrders extends Model
{
    use HasFactory;
             /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'plan',
        'order_date',
        'department_name',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
