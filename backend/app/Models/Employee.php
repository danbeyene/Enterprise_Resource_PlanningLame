<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
           /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone_number',
        'current',
        'start_date',
        'department',
        'position',
        'salary',
        'stop_date',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
