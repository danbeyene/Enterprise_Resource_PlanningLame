<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
class User extends Authenticatable
{
    use HasRoles, HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone_number',
        'start_date',
        'department',
        'position',
        'salary',
        'stop_date',
    ];

        /**
     * Add a mutator to ensure hashed passwords
     */
    public function setPasswordAttribute($password)
    {
        $this->attributes["password"] = bcrypt($password);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function finishedProducts(){
        return $this->hasMany(FinishedProducts::class);
    }
    public function payableAccounts(){
        return $this->hasMany(PayableAccounts::class);
    }
    public function planningOrders(){
        return $this->hasMany(PlanningOrders::class);
    }
    public function productionMachinery(){
        return $this->hasMany(ProductionMachinery::class);
    }
    public function productionOrder(){
        return $this->hasMany(ProductionOrder::class);
    }
    public function purchaseOrders(){
        return $this->hasMany(PurchaseOrders::class);
    }
    public function purchaseRequisitions(){
        return $this->hasMany(PurchaseRequisitions::class);
    }
    public function rawMaterial(){
        return $this->hasMany(RawMaterial::class);
    }
    public function receivableAccounts(){
        return $this->hasMany(ReceivableAccounts::class);
    }
    public function salesOrder(){
        return $this->hasMany(SalesOrder::class);
    }
    public function salesStatement(){
        return $this->hasMany(SalesStatements::class);
    }
    public function shipping(){
        return $this->hasMany(Shipping::class);
    }
    public function treasury(){
        return $this->hasMany(Treasury::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}