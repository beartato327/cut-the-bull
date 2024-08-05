import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Recipe } from "../../model/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipesUrl = 'api/recipes';
    private http = inject(HttpClient);
    
    getRecipes() {
        return this.http.get<Recipe[]>(this.recipesUrl);
    }
}
