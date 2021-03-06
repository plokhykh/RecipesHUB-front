import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'recipes', loadChildren: () => import('./modules/recipes/recipes.module').then(m => m.RecipesModule)},
      {path: 'ingredients', loadChildren: () => import('./modules/ingredients/ingredients.module').then(m => m.IngredientsModule)}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
