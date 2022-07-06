import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import {HttpClientModule} from "@angular/common/http";
import {IngredientService} from "./services/ingredient.service";
import {IngredientsRoutingModule} from "./ingredients-routing.module";



@NgModule({
  declarations: [
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IngredientsRoutingModule

  ],
  providers: [IngredientService]
})
export class IngredientsModule { }
