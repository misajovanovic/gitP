import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {


  @ViewChild(ShoppingEditComponent, { static: true }) ingredient: ElementRef;
  @Output() selected = new EventEmitter<void>();
  selectedIngredient: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onSelected() {
    console.log(this.selected);
    this.selected.emit();
  }
}
