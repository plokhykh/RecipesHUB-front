import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../services/recipe.service";

import {IRecipe} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: IRecipe[];

  currentPage: number = 1;
  totalItems: number;
  itemsPerPage: number = 9;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getRecipesData(this.currentPage, this.itemsPerPage)
  }

  getRecipesData(page: number, size: number): void {
    this.recipeService.getAll(this.currentPage, this.itemsPerPage).subscribe(response => {
      this.recipes = response.content
      this.totalItems = response.totalElements
    })
  };


  getPage(page: number) {
    this.currentPage = page;
    this.getRecipesData(this.currentPage, this.itemsPerPage);
  }

}
