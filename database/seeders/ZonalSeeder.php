<?php

namespace Database\Seeders;

use App\Models\RouteLine;
use App\Models\Zonal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ZonalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $zonals = [
            [
                'name' => "Default",
                'description' => "Default",
                'status' => true
            ],
            [
                'name' => "Central",
                'description' => "Central",
                'status' => true
            ],

            [
                'name' => "East Central",
                'description' => "East Central",
                'status' => true
            ],

            [
                'name' => "East Coast",
                'description' => "East Coast",
                'status' => true
            ],

            [
                'name' => "Eastern",
                'description' => "Eastern",
                'status' => true
            ],

            [
                'name' => "North Central",
                'description' => "North Central",
                'status' => true
            ],

            [
                'name' => "North Eastern",
                'description' => "North Eastern",
                'status' => true
            ],

            [
                'name' => "North Western",
                'description' => "North Western",
                'status' => true
            ],
            [
                'name' => "Northeast Frontier",
                'description' => "Northeast Frontier",
                'status' => true
            ],

            [
                'name' => "Northern",
                'description' => "Northern",
                'status' => true
            ],

            [
                'name' => "South Central",
                'description' => "South Central",
                'status' => true
            ],

            [
                'name' => "South East Central",
                'description' => "South East Central",
                'status' => true
            ],

            [
                'name' => "South Eastern",
                'description' => "South Eastern",
                'status' => true
            ],

            [
                'name' => "South Western",
                'description' => "South Western",
                'status' => true
            ],

            [
                'name' => "Southern",
                'description' => "Southern",
                'status' => true
            ],

            [
                'name' => "West Central",
                'description' => "West Central",
                'status' => true
            ],

            [
                'name' => "Western",
                'description' => "Western",
                'status' => true
            ],
            
            ];

         Zonal::insert($zonals);
         RouteLine::create([
            "zonal_id"=> 1,
            "name"=> "Default",
            "slug"=> "default",
            "description"=> "default",
         ]);


    }
}
