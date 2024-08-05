import { Component, inject, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
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
