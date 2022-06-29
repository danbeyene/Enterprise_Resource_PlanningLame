<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $employees = [
            [
                "name" => "abebe",
                "email" => "abebe@gmail.com",
                "password" => "12345678",
                "phone_number" => "1111111111",
                "current" => "1",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "admin",
                "position" => "manager",
                "salary" => "50000",
            ],
            [
                "name" => "mike",
                "email" => "mike@gmail.com",
                "password" => "12345678",
                "phone_number" => "2222222222",
                "current" => "1",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "GL",
                "position" => "director",
                "salary" => "10000",
            ],
            [
                "name" => "dan",
                "email" => "dan@gmail.com",
                "password" => "12345678",
                "phone_number" => "3333333333",
                "current" => "0",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "purchase",
                "position" => "director",
                "salary" => "10000",
            ],
            [
                "name" => "helen",
                "email" => "helen@gmail.com",
                "password" => "12345678",
                "phone_number" => "4444444444",
                "current" => "0",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "production",
                "position" => "director",
                "salary" => "10000",
            ],
            [
                "name" => "robel",
                "email" => "robel@gmail.com",
                "password" => "12345678",
                "phone_number" => "555555555",
                "current" => "1",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "inventory",
                "position" => "director",
                "salary" => "10000",
            ],
            [
                "name" => "heran",
                "email" => "heran@gmail.com",
                "password" => "12345678",
                "phone_number" => "6666666666",
                "current" => "0",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "planning",
                "position" => "director",
                "salary" => "50000",
            ],
            [
                "name" => "nati",
                "email" => "nati@gmail.com",
                "password" => "12345678",
                "phone_number" => "777777777",
                "current" => "1",
                "start_date" => "2022-05-27 23:59:59",
                "department" => "sales",
                "position" => "director",
                "salary" => "10000",
            ]
        ];

        foreach ($employees as $employee) {
            \App\Models\Employee::create($employee);
        }
    }
}
