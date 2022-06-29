<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinishedProducts extends Model
{
    use HasFactory;
       /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'serial_number',
        'type',
        'MD',
        'EXD',
        'price',
        'place',
        'sold',
        'warehouse',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}