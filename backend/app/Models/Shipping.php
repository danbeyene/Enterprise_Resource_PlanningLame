<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shipping extends Model
{
    use HasFactory;
           /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'from',
        'to',
        'amount',
        'type',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
