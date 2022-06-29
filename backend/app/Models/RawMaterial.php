<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RawMaterial extends Model
{
    use HasFactory;
       /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'amount',
        'place',
        'purchased_date',
        'shipped_out_date',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}