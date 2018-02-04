using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ChefUpHackPoly.Models
{
    public class RecipeContext : DbContext
    {
        public RecipeContext(DbContextOptions<RecipeContext> options)
            : base(options)
        { }

        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
    }

    public class Recipe
    {
        public int RecipeId { get; set; }
        public string RecipeName { get; set; }
        public int CookTime { get; set; }
        public string Category { get; set; }
        public string Ingredients { get; set; }
    }

    public class Ingredient
    {
        public int IngredientId { get; set; }
        public string IngredientName { get; set; }
  }
}
