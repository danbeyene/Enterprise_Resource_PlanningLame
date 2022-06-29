<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class PlanningOrdersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $faker = \Faker\Factory::create();
        // for ($i=0; $i < 10; $i++) {
        //     \App\Models\PlanningOrders::create([
        //         "plan" => $faker->word(),
        //         "order_date" => $faker->date(),
        //         "department_name" => rand(1,7)
        //     ]);
        // }

        $plans = [
            [
                "plan" => "plan for admin",
                "order_date" => "2022-05-27 23:59:59",
                "department_name" => "admin",
            ],
            [
                "plan" => "plan for gl",
                "order_date" => "2022-05-27 23:59:59",
                "department_name" => "GL",
            ],
            [
                "plan" => "plan for purchase",
                "order_date" => "2022-05-27 23:59:59",
                "department_name" => "purchase",
            ],
            [
                "plan" => "plan for production",
                "order_date" => "2022-05-27 23:59:59",
                "department_name" => "production",
            ],
            [
                "plan" => "plan for inventory",
                "order_date" => "2022-05-27 23:59:59",
                "department_name" => "inventory",
            ],
            [
                "plan" => "plan for planning",
                "order_date" => "2022-05-27 23:59:59",
                "department_name" => "planning",
            ],
            [
                "plan" => "plan for sales",
                "order_date" => "2022-05-27 23:59:59",
                "department_name" => "sales",
            ]
        ];

        foreach ($plans as $plan) {
            \App\Models\PlanningOrders::create($plan);
        }
    }
}
