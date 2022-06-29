<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseOrders extends Model
{
    use HasFactory;
             /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'rawmaterial_name',
        'amount',
        'order_date',
        'user_id',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
