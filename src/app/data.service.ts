import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      recipes: <Recipe[]>[
        {
          id: 1,
          name: "cheesecake",
          description: "Rich and creamy cheesecake",
          imagePath: "",
          ingredients: <Ingredient[]>[
            {
              name: "creamcheese",
              quantity: 1,
              unit: "cup"
            },
            {
              name: "sugar",
              quantity: 1,
              unit: "cup"
            }
          ],
          steps: [],
          servings: 4,
          notes: []
        }
        
      ],
      users: <User[]>[
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          password: "password123"
        }

      ]
    };
  }
}