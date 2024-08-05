import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipesComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cut-the-bull';
}
