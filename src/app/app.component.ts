import { Component } from '@angular/core';
import { CocktailResponse, CocktailService } from './cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query = ''
  drinks: Array<CocktailResponse> = []

  constructor(private cocktail: CocktailService) {}

  search(query: string) {
    this.query = query
    this.cocktail.search(query).subscribe((response: any) => {
      console.log(response)
      this.drinks = response
    })
  }
}
