<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class FinishedProductsSeeder extends Seeder
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
            \App\Models\FinishedProducts::create([
                "serial_number" => $faker->numerify('product-####'),
                "type" => $faker->word(),
                "MD" => $faker->date(),
                "EXD" => $faker->date(),
                "price" => $faker->randomFloat(2,10000,50000),
                "warehouse" => $faker->word(),
                "place" => $faker->word(),
                "sold" => $faker->boolean(),
                "user_id" => rand(1,7)
            ]);
        }
    }
}
