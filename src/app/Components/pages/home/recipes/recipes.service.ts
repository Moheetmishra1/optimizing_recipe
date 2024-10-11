import { inject, Injectable, signal } from "@angular/core";
import { RECIPESTYPE } from "../../pages-helper";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs";
import { AllRecipeType } from "../../../../shared/AllrecipesType";

@Injectable({
    providedIn:'root'


})

export class RecipesService{
    tags=signal<any>([])

    private httpClient= inject(HttpClient)

    recipesBytagName(tagname:string){
        console.log("by tag ",tagname);

        return this.httpClient.get<AllRecipeType>(`https://dummyjson.com/recipes/tag/${tagname}`)
        .pipe(
            map(a=>a.recipes),
            tap({
                next:(data)=>{this.tags.set(data);console.log(this.tags());
                }
            })
        )
    }
    getAllRecipes(){
       
        return this.httpClient.get<{recipes:RECIPESTYPE[],total:number,skip:number,limit:number}>('https://dummyjson.com/recipes')
        .pipe(
            map(a=>a.recipes),
            tap({
                next:(data)=>{this.tags.set(data);console.log(this.tags());
                }
            })
        )
    }
    recipesByMealName(name:string){
        return this.httpClient.get<{recipes:RECIPESTYPE[],total:number,skip:number,limit:number}>(`https://dummyjson.com/recipes/meal-type/${name}`).pipe(
            map(a=>a.recipes),
            tap( {
                next:(data)=>this.tags.set(data)
            })
        )
    }
}