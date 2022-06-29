<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            EmployeeSeeder::class,
            PermissionSeeder::class,
            FinishedProductsSeeder::class,
            ProductionMachinerySeeder::class,
            RawMaterialSeeder::class,
            TreasurySeeder::class,
            WarehousesSeeder::class,
            ShippingSeeder::class,
            SalesOrderSeeder::class,
            ProductionOrderSeeder::class,
            PurchaseOrdersSeeder::class,
            PlanningOrdersSeeder::class,
            AttendanceSeeder::class,
            
        ]);
    }
}
