import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../contants";
import {IIngredient} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) { }

  getAll (): Observable<any>{
    return this.http.get<any>(urls.ingredients)
  }
}
