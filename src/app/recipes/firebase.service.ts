import { inject, Injectable } from "@angular/core";
import { doc, deleteDoc, collection, collectionData, Firestore, addDoc } from "@angular/fire/firestore";
import { from, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecipeFirebaseService{
    firestore = inject(Firestore);
    recipesColleciton = collection(this.firestore, 'recipes');

    getRecipes(): Observable<{id: string,name: string, description: string, serving_size: string}[]>{
        return collectionData(this.recipesColleciton, {idField: 'id'}) as Observable<{id: string, name: string, description: string, serving_size: string}[]>
    }

    addRecipe(text: string): Observable<string> {
        const data = { text, isCompleted: false };
        const promise = addDoc(this.recipesColleciton, data).then(
          (response) => response.id
        );
        return from(promise);
      }

    deleteRecipe(recipeId: string): Observable<void>{
        const docRef = doc(this.firestore, 'recipes/' + recipeId);
        console.log(docRef);
        const promise = deleteDoc(docRef);
        return from(promise);
    }
}