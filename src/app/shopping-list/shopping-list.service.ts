import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('potato', 5),
    new Ingredient('tomato', 10),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.refresh();
  }
  
  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.refresh();
  }

  deleteIngredient(idx: number) {
    this.ingredients.slice(idx, 0);
  }

  refresh(){
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
