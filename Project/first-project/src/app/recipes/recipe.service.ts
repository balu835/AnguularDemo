import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {


    private recipes : Recipe[] = [
        new Recipe('Chicken Biryani','this is a main course dish'
        ,"https://b.zmtcdn.com/data/pictures/chains/4/18696244/ce94f5d300a22760b183ecef537a4089_featured_v2.jpg"
        ,[
            new Ingredient('Chicken',1),
            new Ingredient('MDH Masala',1),
            new Ingredient('Fried Onions',1),
            new Ingredient('Mint Leaves Bunch',1)
        ]),
        new Recipe('Chicken Fry','this is an appetizer dish'
        ,"https://www.thefooddictator.com/wp-content/uploads/2019/09/andhrachicken.jpg"
        ,[
            new Ingredient('Chicken',1),
            new Ingredient('Garam Masala',1),
            new Ingredient('curry leaves stem',1)
        ])
    
      ];
      constructor(private slService : ShoppingListService){

      }
      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients);
      } 
}