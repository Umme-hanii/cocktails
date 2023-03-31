import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs';

export interface CocktailResponse {
    strDrink: string
    strInstructions: string
}
@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    return this.http.get<Array<CocktailResponse>>('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params: {
        s: query,
      }
    }).pipe(
      pluck('drinks')
    )
  }
}
