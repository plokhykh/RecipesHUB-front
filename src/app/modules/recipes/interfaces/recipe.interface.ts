import {IRecipeCategory} from "./recipe-category.interface";
import {IIngredient} from "./ingredient.interface";

export interface IRecipe {
  "id": number;
  "title": string;
  "description": string;
  "image": string;
  "author": string;
  "categories": [IRecipeCategory],
  "ingredients": [IIngredient]
}
