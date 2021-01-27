import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("A test recipe","this is a test recipe description","https://www.google.com/search?q=chicken+kunda+biryani&tbm=isch&ved=2ahUKEwjWldKQm6buAhUPa60KHfcZAtMQ2-cCegQIABAA&oq=chicken+kunda+biryani&gs_lcp=CgNpbWcQAzICCAA6BwgAELEDEEM6BAgAEEM6BggAEAcQHjoICAAQCBAHEB5Q3iJYiipguSxoAHAAeACAAWCIAf4DkgEBNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=1-AFYJbOL4_WtQX3s4iYDQ&bih=666&biw=1280#imgrc=gjnbb25oBQozNM"),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
