import { inject, Injectable, signal } from "@angular/core";
import { RECIPESTYPE } from "../../pages-helper";
import { HttpClient } from "@angular/common/http";
import { RECIPEDETAILS } from "./RecipeDetails.model";
import { tap } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class RecipeService{
    recipe=signal<RECIPEDETAILS|undefined>(undefined);

    private httpClient= inject(HttpClient)

    getRecipe(id:number){
        return this.httpClient.get<RECIPEDETAILS>(`https://dummyjson.com/recipes/${id}`)
        .pipe(
            tap({
                next:(Data:RECIPEDETAILS)=>{this.recipe.set(Data);console.log(Data);}
                
            })
        )

    }

}