<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[
            \Spatie\Permission\PermissionRegistrar::class
        ]->forgetCachedPermissions();

        // create permissions
        $arrayOfPermissionNames = [
            // User
            "create users",
            "read users",
            "update users",
            "delete users",

            // Employee
            "create employee",
            "read employee",
            "update employee",
            "delete employee",
            //treasury status
            "read treasuryStatus",

            // view plans
            "read adminPlan",
            "read glPlan",
            "read purchasePlan",
            "read salesPlan",
            "read inventoryPlan",
            "read productionPlan",

            // attendance
            "create attendance",
            "read attendance",
            "update attendance",
            "delete attendance",
            
            // Treasury
            "create treasury",
            "read treasury",
            "update treasury",
            "delete treasury",


            // Purchase Orders
            "create purchaseOrders",
            "read purchaseOrders",
            "update purchaseOrders",
            "delete purchaseOrders",

            // ProductionMachinery
            "create productionMachinery",
            "read productionMachinery",
            "update productionMachinery",
            "delete productionMachinery",

            // ProductionOrder
            "create productionOrder",
            "read productionOrder",
            "update productionOrder",
            "delete productionOrder",

            // Warehouses
            "create warehouses",
            "read warehouses",
            "update warehouses",
            "delete warehouses",

            // rawMaterial
            "create rawMaterial",
            "read rawMaterial",
            "update rawMaterial",
            "delete rawMaterial",

            // finishedProducts
            "create finishedProducts",
            "read finishedProducts",
            "update finishedProducts",
            "delete finishedProducts",

            // shipping
            "create shipping",
            "read shipping",
            "update shipping",
            "delete shipping",

            // planningOrders
            "create planningOrders",
            "read planningOrders",
            "update planningOrders",
            "delete planningOrders",


            // salesOrder
            "create salesOrder",
            "read salesOrder",
            "update salesOrder",
            "delete salesOrder",

            // ....
            
            
        ];
        $permissions = collect($arrayOfPermissionNames)->map(function (
            $permission
        ) {
            return ["name" => $permission, "guard_name" => "web"];
        });

        Permission::insert($permissions->toArray());

        // create role & give it permissions
        Role::create(["name" => "admin"])->givePermissionTo(Permission::all());
        Role::create(["name" => "GL"])->givePermissionTo(["read glPlan",'read employee',"delete employee","create treasury","read treasury","update treasury","delete treasury"]);
        Role::create(["name" => "purchase"])->givePermissionTo(["read treasury","create rawMaterial","read rawMaterial","update rawMaterial","delete rawMaterial","read purchasePlan","create treasury","read treasury","update treasury","delete treasury","read purchaseOrders"]);
        Role::create(["name" => "production"])->givePermissionTo(["create finishedProducts","read finishedProducts","update finishedProducts","delete finishedProducts","create rawMaterial","read rawMaterial","update rawMaterial","delete rawMaterial","create employee","read employee","read productionPlan","create productionMachinery","read productionMachinery","update productionMachinery","delete productionMachinery","read productionOrder"]);
        Role::create(["name" => "inventory"])->givePermissionTo(["read inventoryPlan","create warehouses","read warehouses","update warehouses","delete warehouses","create rawMaterial","read rawMaterial","update rawMaterial","delete rawMaterial","create finishedProducts","read finishedProducts","update finishedProducts","delete finishedProducts","create shipping","read shipping","update shipping","delete shipping"]);
        Role::create(["name" => "planning"])->givePermissionTo(["create productionMachinery","read productionMachinery","update productionMachinery","delete productionMachinery","read warehouses","read treasury","create finishedProducts","read finishedProducts","update finishedProducts","delete finishedProducts","create rawMaterial","read rawMaterial","update rawMaterial","delete rawMaterial","read employee","create planningOrders","read planningOrders","update planningOrders","delete planningOrders","read rawMaterial","read finishedProducts","create planningOrders","read planningOrders","update planningOrders","delete planningOrders","read treasury"]);
        Role::create(["name" => "sales"])->givePermissionTo(["read finishedProducts","create finishedProducts","read salesPlan","create treasury","read treasury","update treasury","delete treasury","read salesOrder"]);

        // Assign roles to users (in this case for user id -> 1 - 7)
        User::find(1)->assignRole('admin');
        User::find(2)->assignRole('GL');
        User::find(3)->assignRole('purchase');
        User::find(4)->assignRole('production');
        User::find(5)->assignRole('inventory');
        User::find(6)->assignRole('planning');
        User::find(7)->assignRole('sales');
    }
}
