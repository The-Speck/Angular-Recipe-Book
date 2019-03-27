import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameRef;
  @ViewChild("amountInput") amountRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientPop = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const name = this.nameRef.nativeElement.value;
    const amt = this.amountRef.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(name, amt));
    this.onClearItem();
  }

  onDeleteItem(){
    this.ingredientPop.emit()
  }

  onClearItem(){
    this.nameRef.nativeElement.value = '';
    this.amountRef.nativeElement.value = '';
  }

}
