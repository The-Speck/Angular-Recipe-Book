import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger', 
      'Super Burger', 
      'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 20)
      ]),
    new Recipe(
      'Cookie', 
      'Cool Cookie', 
      'https://www.salata.com/sites/default/files/content_chunk_images/xourfood-3.jpg.pagespeed.ic.h6TJfsr3ni.jpg',
      [
        new Ingredient('Dough', 1),
        new Ingredient('Chocolate Chip', 100)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) { }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
