import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {NgxPaginationModule} from "ngx-pagination";

import { RecipesComponent } from './components/recipes/recipes.component';
import {RecipesRoutingModule} from "./recipes-routing.module";
import {RecipeService} from "./services";
import {ImagePreviewComponent} from "./components/image-preview/image-preview.component";
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesMainComponent } from './components/recipes-main.component';


@NgModule({
  declarations: [
    RecipesComponent,
    ImagePreviewComponent,
    RecipeDetailsComponent,
    RecipesMainComponent
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
