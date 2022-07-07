import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from '../../../contants';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getAll (page: number=1, size: number = 30): Observable<any>{
    return this.http.get<any>(`${urls.recipes}?page=${page}&size=${size}`)
  }

}
