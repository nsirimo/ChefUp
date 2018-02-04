using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChefUpHackPoly.Models;
using ChefUpHackPoly.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ChefUpHackPoly.Controllers
{
  [Produces("application/json")]
  [Route("api/Recipe")]
  public class RecipeController : Controller
    {
    private readonly RecipeContext _context;

    public RecipeController(RecipeContext context)
    {
      _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> EmployeeList()
    {
      List<Recipe_Ingreidents> ilIst = new List<Recipe_Ingreidents>();
      var listData = await (from recipe in _context.Recipes
                            select new
                            {
                              recipe.RecipeId,
                              recipe.RecipeName,
                              recipe.Ingredients,
                              recipe.CookTime,
                              recipe.Category
                            }
                    ).ToListAsync();
      listData.ForEach(x =>
      {
        Recipe_Ingreidents Obj = new Recipe_Ingreidents();
        Obj.RecipeId = x.RecipeId;
        Obj.RecipeName = x.RecipeName;
        Obj.Ingredients = x.Ingredients;
        Obj.CookTime = x.CookTime;
        ilIst.Add(Obj);
      });

      return Json(ilIst);
    }
  }
}
