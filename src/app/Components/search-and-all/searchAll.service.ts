import { inject, Injectable, signal } from "@angular/core";
import { RECIPESTYPE } from "../pages/pages-helper";
import { HttpClient } from "@angular/common/http";
import {  debounceTime, tap } from "rxjs";
import { RECIPEALLTYPE } from "./searchAll.model";


@Injectable({
    providedIn:'root'
})

export class SearchAndAllService{
    recipes=signal<RECIPESTYPE[]>([]);

    private httpClient= inject(HttpClient)

    searchByRecipe(str:String){
        return this.httpClient.get<RECIPEALLTYPE>(`https://dummyjson.com/recipes/search?q=${str}`).pipe(debounceTime(400),
    tap({
        next:(val:RECIPEALLTYPE)=>{
            this.recipes.set(val.recipes)
        }
    }))
    }

}