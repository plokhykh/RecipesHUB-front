import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./components/recipes/recipes.component";
import {RecipeDetailsComponent} from "./components/recipe-details/recipe-details.component";
import {RecipesMainComponent} from "./components/recipes-main.component";

const routes: Routes = [
  {
    path: '', component: RecipesMainComponent, children: [
      {path: '', component: RecipesComponent},
      {path: ':id', component: RecipeDetailsComponent},
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
}
