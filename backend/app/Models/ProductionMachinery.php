<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductionMachinery extends Model
{
    use HasFactory;
       /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'machine_id',
        'department',
        'name',
        'operator_id',
        'cost',
        'start_date',
        'stop_date',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}