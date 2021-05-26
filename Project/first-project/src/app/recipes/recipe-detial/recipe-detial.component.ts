import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detial',
  templateUrl: './recipe-detial.component.html',
  styleUrls: ['./recipe-detial.component.css']
})
export class RecipeDetialComponent implements OnInit {

  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;


  constructor(private recipeService : RecipeService,
     private route: ActivatedRoute,
     private router:Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
    }
    );

  }

  onAddToIngredientsList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
    //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route})
  }
}
