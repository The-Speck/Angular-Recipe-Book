import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameRef;
  @ViewChild("amountInput") amountRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const name = this.nameRef.nativeElement.value;
    const amt = this.amountRef.nativeElement.value;
    if (name && amt) {
      const newIngredient = new Ingredient(name, amt);
      this.slService.addIngredient(newIngredient);
      this.onClearItem();
    }
  }

  onDeleteItem(){
  }

  onClearItem(){
    this.nameRef.nativeElement.value = '';
    this.amountRef.nativeElement.value = '';
  }
}
