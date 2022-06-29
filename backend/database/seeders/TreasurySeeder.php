<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TreasurySeeder extends Seeder
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
            \App\Models\Treasury::create([
                "name" => $faker->word(),
                "submission_date" => $faker->date(),
                "account_type" => $faker->word(),
                "cost" => $faker->randomFloat(2,10000,1000000),
                "amount" => $faker->numberBetween(0, 100),
                "user_id" => rand(1,7)
            ]);
        }
    }
}
