import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe-1', 'This is a recipe 1',
      'https://get.pxhere.com/photo/vegetarian-foods-healthy-dish-cuisine-food-ingredient-meat-produce-recipe-' +
      'kung-pao-chicken-vegetarian-food-sweet-and-sour-chicken-sweet-and-sour-indian-chinese-cuisine-patatas-bravas-brunch-' +
      'vegetable-1588469.jpg'),
    new Recipe('Recipe-2', 'This is a recipe 2',
      'https://get.pxhere.com/photo/vegetarian-foods-healthy-dish-cuisine-food-ingredient-meat-produce' +
      '-recipe-kung-pao-chicken-vegetarian-food-sweet-and-sour-chicken-sweet-and-sour-indian-chinese-cuisine-patatas-' +
      'bravas-brunch-vegetable-1588469.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
