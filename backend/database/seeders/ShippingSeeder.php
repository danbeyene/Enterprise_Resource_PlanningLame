<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ShippingSeeder extends Seeder
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
            \App\Models\Shipping::create([
                "from" => $faker->word(),
                "to" => $faker->word(),
                "amount" => $faker->numberBetween(0, 100),
                "type" => $faker->word(),
                "user_id" => rand(1,7)
            ]);
        }
    }
}
