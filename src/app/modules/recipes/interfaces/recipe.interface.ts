import {IRecipeCategory} from "./recipe-category.interface";
import {IIngredient} from "../../ingredients/interfaces/ingredient.interface";

export interface IRecipe {
  "id": number;
  "title": string;
  "description": string;
  "image": string;
  "author": string;
  "categories": [IRecipeCategory],
  "ingredients": [IIngredient]
}
