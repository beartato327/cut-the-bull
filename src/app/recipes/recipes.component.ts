import { Component, inject, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Recipe } from '../../model/recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeFirebaseService } from './firebase.service';
import { addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent implements OnInit {
  private recipesService = inject(RecipesService);
  recipesFirebaseService = inject(RecipeFirebaseService);
  recipes = this.recipesService.recipes.asReadonly();
  //recipes: Recipe[] = [];

  ngOnInit(): void {
    this.getRecipes();
  }

  private getRecipes() {
    /* this.recipesService.getRecipes().subscribe(recipes => this.recipes = recipes); */
    this.recipesFirebaseService.getRecipes().subscribe((recipes) => {
      this.recipesService.recipes.set(recipes);
    });
  }

  addRecipe(){
    const data = {}
    const promise = addDoc(this.recipesFirebaseService.recipesColleciton, data);
  }

/*   getRating(rating: number) {
    return Array(Math.floor(rating)).fill(0);
  } */

  deleteRecipe(recipeId: string) {
    this.recipesFirebaseService.deleteRecipe(recipeId).subscribe(()=>{
      this.recipesService.deleteRecipe(recipeId);
    });
  }
}
