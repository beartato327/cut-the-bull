import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from '../../model/recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {

  private recipesService = inject(RecipesService);

  ngOnInit(): void {
      this.getRecipes();
  }

  private getRecipes(){
    this.recipesService.getRecipes().subscribe(recipes => console.log(recipes));
  }
}
