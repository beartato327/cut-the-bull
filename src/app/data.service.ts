import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from '../model/recipe.model';
import { Ingredient } from '../model/ingredient.model';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      recipes: <Recipe[]>[
        {
          id: 1,
          chefName: 'John Doe',
          chefImage:
            'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
          name: 'cheesecake',
          categories: ['dessert', 'cake', 'cheesecake'],
          description: 'Rich and creamy cheesecake',
          imagePath:
            'https://t3.ftcdn.net/jpg/06/92/79/40/360_F_692794044_9bsTP1Z6Dk07XDEJa4T8A94ZEGpp9Jpl.jpg',
          ingredients: <Ingredient[]>[
            {
              name: 'creamcheese',
              quantity: 1,
              unit: 'cup',
            },
            {
              name: 'sugar',
              quantity: 1,
              unit: 'cup',
            },
          ],
          steps: [],
          servings: 4,
          notes: [],
          rating: 4.5,
        },
        {
          id: 2,
          chefName: 'John Doe',
          chefImage:
            'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
          name: 'cheesecake',
          categories: ['dessert', 'cake', 'cheesecake'],
          description: 'Rich and creamy cheesecake',
          imagePath:
            'https://t3.ftcdn.net/jpg/06/92/79/40/360_F_692794044_9bsTP1Z6Dk07XDEJa4T8A94ZEGpp9Jpl.jpg',
          ingredients: <Ingredient[]>[
            {
              name: 'creamcheese',
              quantity: 1,
              unit: 'cup',
            },
            {
              name: 'sugar',
              quantity: 1,
              unit: 'cup',
            },
          ],
          steps: [],
          servings: 4,
          notes: [],
          rating: 3,
        },
        {
          id: 3,
          chefName: 'John Doe',
          chefImage:
            'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
          name: 'cheesecake',
          categories: ['dessert', 'cake', 'cheesecake'],
          description: 'Rich and creamy cheesecake',
          imagePath:
            'https://t3.ftcdn.net/jpg/06/92/79/40/360_F_692794044_9bsTP1Z6Dk07XDEJa4T8A94ZEGpp9Jpl.jpg',
          ingredients: <Ingredient[]>[
            {
              name: 'creamcheese',
              quantity: 1,
              unit: 'cup',
            },
            {
              name: 'sugar',
              quantity: 1,
              unit: 'cup',
            },
          ],
          steps: [],
          servings: 4,
          notes: [],
          rating: 4,
        },
        {
          id: 11,
          chefName: 'John Doe',
          chefImage:
            'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
          name: 'cheesecake',
          categories: ['dessert', 'cake', 'cheesecake'],
          description: 'Rich and creamy cheesecake',
          imagePath:
            'https://t3.ftcdn.net/jpg/06/92/79/40/360_F_692794044_9bsTP1Z6Dk07XDEJa4T8A94ZEGpp9Jpl.jpg',
          ingredients: <Ingredient[]>[
            {
              name: 'creamcheese',
              quantity: 1,
              unit: 'cup',
            },
            {
              name: 'sugar',
              quantity: 1,
              unit: 'cup',
            },
          ],
          steps: [],
          servings: 4,
          notes: [],
          rating: 0,
        },
      ],
      users: <User[]>[
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          password: 'password123',
          favoriteRecipes: [],
        },
      ],
    };
  }
}
