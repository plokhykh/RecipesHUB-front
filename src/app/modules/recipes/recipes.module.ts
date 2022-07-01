import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { RecipesComponent } from './recipes/recipes.component';
import {RecipesRoutingModule} from "./recipes-routing.module";
import {RecipeService} from "./recipe.service";



@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RecipesRoutingModule
  ],
  providers: [RecipeService]
})
export class RecipesModule { }
