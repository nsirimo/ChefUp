import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { RecipeServices } from '../Services/recipe.service';


@Component({
  selector: 'app-home',
  templateUrl: 'app-homepage.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.css',
    'app-homepage.component.css']
})
export class HomePageComponent implements OnInit {
  public RecipeList = [];

  constructor(private _router: Router, private repService: RecipeServices) {
    this.repService.getRecipeList()
      .subscribe(
      (data: Response) => (this.RecipeList = data.json())
    );

  }

  userInput = '';
  onEnter(userInput: string) { 
    this.userInput = userInput;
    console.log(userInput);
    this.repService.getRecipeList()
      .subscribe(
      (data: Response) => (this.RecipeList = data.json())
      );
  }

  ngOnInit() {
  }

}
