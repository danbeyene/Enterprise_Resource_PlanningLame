<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class AttendanceSeeder extends Seeder
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
            \App\Models\Attendance::create([
                "att_date" => $faker->numberBetween(0, 100),
                "employee_id" => $faker->numberBetween(0, 7),
                "att_date" => $faker->date(),
                "attendance" => $faker->boolean(),
                "user_id" => rand(1,7)
            ]);
        }
    }
}
