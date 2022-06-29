<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProductionMachinerySeeder extends Seeder
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
            \App\Models\ProductionMachinery::create([
                "machine_id" => $faker->numerify('machine-####'),
                "department" => $faker->word(),
                "name" => $faker->words(2, true),
                "operator_id" => $faker->numerify('operator-####'),
                "cost" => $faker->randomFloat(2,100000,1000000),
                "start_date" => $faker->date(),
                "stop_date" => $faker->date(),
                "user_id" => rand(1,7)
            ]);
        }
    }
}
