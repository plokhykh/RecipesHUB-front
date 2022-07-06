import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {IngredientsComponent} from "./components/ingredients/ingredients.component";

const routes: Routes = [
  {path: '', component: IngredientsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
