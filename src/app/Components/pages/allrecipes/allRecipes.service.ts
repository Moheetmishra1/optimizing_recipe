import { inject, Injectable, signal } from "@angular/core";
import { RECIPESTYPE } from "../pages-helper";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs";
import { AllRecipeType } from "../../../shared/AllrecipesType";

@Injectable({
    providedIn:'root'
})

export class AllRecipesService{
    recipes= signal<RECIPESTYPE[]>([])
    private httpClient= inject(HttpClient)

    getAllRecipes(){
        return this.httpClient.get<AllRecipeType>('https://dummyjson.com/recipes')
        .pipe(
            map(a=>a.recipes),
            tap({
                next:(Data)=>this.recipes.set(Data)
            })
        )

    }
}