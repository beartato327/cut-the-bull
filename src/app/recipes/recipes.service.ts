import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Recipe } from "../../model/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    private recipesUrl = 'api/recipes';
    private http = inject(HttpClient);

    recipes = signal<{id: string, name: string, description: string, serving_size: string}[]>([]);
    
    getRecipes() {
        return this.http.get<Recipe[]>(this.recipesUrl);
    }

    deleteRecipe(recipeId: string) {
        this.recipes.update(recipes => recipes.filter(recipe => recipe.id !== recipeId));
    }
}
