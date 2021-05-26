import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients : Ingredient[];
  private idChangedSub : Subscription;

  constructor(private shoppinglistService : ShoppingListService) { }
  ngOnDestroy(): void {
    this.idChangedSub.unsubscribe();
  }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.idChangedSub = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

}
