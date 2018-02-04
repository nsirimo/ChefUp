import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RecipeServices {
  constructor(private http: Http) {

  }

  getRecipeList() {
    return this.http.get('http://localhost:56329/api/recipe');
  }
}   
