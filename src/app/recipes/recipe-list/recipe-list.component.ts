import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Example', 'example recipe', 'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg'),
    new Recipe('Another Example', 'example recipe', 'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
