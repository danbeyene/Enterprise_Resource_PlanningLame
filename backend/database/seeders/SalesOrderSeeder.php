<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SalesOrderSeeder extends Seeder
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
            \App\Models\SalesOrder::create([
                "product_name" => $faker->word(),
                "amount" => $faker->numberBetween(0, 100),
                "order_date" => $faker->date(),
                "user_id" => rand(1,7)
            ]);
        }
    }
}
