<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;// This tells Laravel that this factory is meant for the "Post" model. Since Eloquent automatically maps the Post model to the posts table, Laravel knows where to insert the fake data.

// running php artisan migrate only creates or modifies database tables based on your migration files. It does not insert data into the Post table.

// To insert fake data using your PostFactory, you need to run database seeders separately.
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'body' => fake()->text(),//filling the body attribute present in posts table with a random text
        ];
    }
}
