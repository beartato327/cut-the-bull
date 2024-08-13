import { Ingredient } from './ingredient.model';

export interface Recipe {
  id: number;
  chefImage: string;
  chefName: string;
  name: string;
  categories: string[];
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
  steps: string[];
  servings: number;
  notes: string[];
  rating: number;
}
