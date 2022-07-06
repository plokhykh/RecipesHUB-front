import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RecipeService} from "../../services/recipe.service";
import {IRecipe} from "../../interfaces";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipesComponent implements OnInit {
  recipes: IRecipe[];
  currentPage: number = 1;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.getAll().subscribe(response => this.recipes = response.content)
  }

}
