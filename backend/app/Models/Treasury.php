<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Treasury extends Model
{
    use HasFactory;
        /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'submission_date',
        'account_type',
        'cost',
        'amount',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}