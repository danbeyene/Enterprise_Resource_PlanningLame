<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                "name" => "admin",
                "email" => "admin@gmail.com",
                "password" => "12345678",
                "phone_number" => "1111111111",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "admin",
                "position" => "manager",
                "salary" => "50000",
            ],
            [
                "name" => "GL",
                "email" => "GL@gmail.com",
                "password" => "12345678",
                "phone_number" => "2222222222",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "GL",
                "position" => "director",
                "salary" => "10000",
            ],
            [
                "name" => "purchase",
                "email" => "purchase@gmail.com",
                "password" => "12345678",
                "phone_number" => "3333333333",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "purchase",
                "position" => "director",
                "salary" => "10000",
            ],
            [
                "name" => "production",
                "email" => "production@gmail.com",
                "password" => "12345678",
                "phone_number" => "4444444444",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "production",
                "position" => "director",
                "salary" => "10000",
            ],
            [
                "name" => "inventory",
                "email" => "inventory@gmail.com",
                "password" => "12345678",
                "phone_number" => "555555555",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "inventory",
                "position" => "director",
                "salary" => "10000",
            ],
            [
                "name" => "planning",
                "email" => "planning@gmail.com",
                "password" => "12345678",
                "phone_number" => "6666666666",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "planning",
                "position" => "director",
                "salary" => "50000",
            ],
            [
                "name" => "sales",
                "email" => "sales@gmail.com",
                "password" => "12345678",
                "phone_number" => "777777777",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "sales",
                "position" => "director",
                "salary" => "10000",
            ]
        ];

        foreach ($users as $user) {
            \App\Models\User::factory()->create($user);
        }
    }
}
