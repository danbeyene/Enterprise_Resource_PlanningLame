<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class WarehousesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        for ($i=0; $i < 10; $i++) {
            \App\Models\Warehouses::create([
                "name" => $faker->word(),
                "capacity" => $faker->numberBetween(0, 100),
                "available_space" => $faker->numberBetween(0, 100),
                "user_id" => rand(1,7)
            ]);
        }
    }
}
