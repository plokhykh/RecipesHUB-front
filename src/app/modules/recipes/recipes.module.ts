import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {NgxPaginationModule} from "ngx-pagination";

import { RecipesComponent } from './components/recipes/recipes.component';
import {RecipesRoutingModule} from "./recipes-routing.module";
import {RecipeService} from "./services";
import { RecipeComponent } from './components/recipe/recipe.component';
import {ImagePreviewComponent} from "./components/image-preview/image-preview.component";


@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent,
    ImagePreviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RecipesRoutingModule,
    NgxPaginationModule
  ],
  providers: [RecipeService]
})
export class RecipesModule { }
