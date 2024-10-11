import { inject, Injectable, signal } from "@angular/core";
import { RECIPESTYPE } from "./pages-helper";
import { HttpClient } from "@angular/common/http";
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from "rxjs";
import { RECIPEALLTYPE } from '../search-and-all/searchAll.model';

@Injectable({
    providedIn:'root',
})

export class HomeService{

    recipes= signal<RECIPESTYPE[]>([])
    httpClient= inject(HttpClient)
    recipe =signal<RECIPESTYPE|undefined>(undefined)
    recipesTags:RECIPESTYPE[]=[]

    recipesByCuisine(){
        const cate:any[]=[]

        this.recipes().forEach(recipe=>{
            if(!cate.some(a=>a.cuisine === recipe.cuisine)){
                let obj ={image:recipe.image,cuisine:recipe.cuisine}
                cate.push(obj)
      }
        })
        return cate
    }
    getSingleRecipe(id:string){
        return this.httpClient.get<RECIPESTYPE>(`https://dummyjson.com/recipes/${id}`).
        pipe(
            tap({
                next:(Data)=>this.recipe.set(Data)
            })
        )
    }


    getAllRecipes(){
        return this.httpClient.get<{recipes:RECIPESTYPE[],}>('https://dummyjson.com/recipes')
        .pipe( 
            map((data)=>data?.recipes ),
            tap({
                next:(recipesData)=>{
                    
                    this.recipes.set(recipesData)
                }           })        )   
             }

    recipesByTag(){
        if(!this.recipesTags.length){       
        const dishs:any={};
        const obj = this.recipes().reduce((a,b)=>{
            
            b.tags.forEach(typeDish=>{
                if(a[typeDish]){
                        a[typeDish]=[...a[typeDish],b.image]
                }else{
                    a[typeDish]=[b.image]
                }
            });
            
            return a
        },dishs);
        
        return obj
    }
    return this.recipesTags
    }
    addRecipe(recipe:any){

        this.recipes.update(data=>[...data,recipe])
        
    }

    
  searchRecipe(search:string){
    return  this.httpClient.get<RECIPEALLTYPE>(`https://dummyjson.com/recipes/search?q=${search}`).pipe(
    
    tap({
        next:(val)=>{
            this.recipes.set(val.recipes);

        }
    }))
  }

  moreRecipesData(){
    return this.httpClient.get<{recipes:RECIPESTYPE[],}>(`https://dummyjson.com/recipes?limit=40&skip=${this.recipes().length}&select=name,image`).pipe(
        map((data)=>data?.recipes ),
        tap({
            next:(data)=>{
                this.recipes.update((val)=>[...data])
            }
        })
    )
  }

    updateRecipe(recipe:any){

        this.recipes.update((data)=>data.map(a=>{
            if(a.id=== recipe.id){
                
                return recipe
            }else{
                return a;
            }
        }))
    }
    deleteByTag(){
        // this.recipes.update((recipe)=>recipe.filter(a=>a.id !== id))

    }

    deleteRecipe(id:number){
        console.log(id);
        console.log(this.recipes().length);
        console.log(this.recipes()[id]);
        
        this.recipes.update((recipe)=>recipe.filter(a=>a.id !== id))
        console.log(this.recipes().length);
        
    }

}