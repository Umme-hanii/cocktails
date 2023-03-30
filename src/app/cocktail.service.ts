import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  search(query: string) {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params: {
        s: query,
      }
    })
  }
}
