<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RawMaterialSeeder extends Seeder
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
            \App\Models\RawMaterial::create([
                "name" => $faker->word(),
                "amount" => $faker->numberBetween(0, 100),
                "place" => $faker->word(),
                "purchased_date" => $faker->date(),
                "shipped_out_date" => $faker->date(),
                "user_id" => rand(1,7)
            ]);
        }
    }
}
