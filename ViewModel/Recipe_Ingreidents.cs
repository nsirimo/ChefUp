using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChefUpHackPoly.ViewModel
{
    public class Recipe_Ingreidents : Controller
    {
    public int RecipeId { get; set; }
    public string RecipeName { get; set; }
    public int CookTime { get; set; }
    public string Category { get; set; }
    public string Ingredients { get; set; }
  }
}
