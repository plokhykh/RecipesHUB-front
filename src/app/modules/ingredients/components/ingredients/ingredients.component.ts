import { Component, OnInit } from '@angular/core';
import {IngredientService} from "../../services";
import {IIngredient} from "../../interfaces";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: IIngredient[];

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.getAll().subscribe(response => this.ingredients = response.content)
  }

}
